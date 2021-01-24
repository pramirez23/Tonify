class User < ApplicationRecord
  
  validates :email, :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :gender, :birthday, :password_digest, :session_token, presence: true 
  validates :email, confirmation: { message: "does not match"}
  validates :email_confirmation, presence: true
  validate :valid_birthday, if: proc { |user| user.birthday.present? }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password) 
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!(:validate => false)
    self.session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end 

  def valid_birthday
    errors.add(:birthday, "is not a valid date") if birthday > Date.today || !birthday
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
  
end