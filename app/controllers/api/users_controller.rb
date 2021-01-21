class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: {
        email: @user.errors.full_messages_for(:email),
        username: @user.errors.full_messages_for(:username),
        password: @user.errors.full_messages_for(:password),
        gender: @user.errors.full_messages_for(:gender)
      }, status: 422
    end
  end
 
  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :email,
      :first_name,
      :last_name,
      :gender,
    )
  end
  
end

