class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: {
        email: @user.errors.full_messages_for(:email),
        email_confirmation: @user.errors.full_messages_for(:email_confirmation),
        birthday: @user.errors.full_messages_for(:birthday),
        username: @user.errors.full_messages_for(:username),
        password: @user.errors.full_messages_for(:password),
        gender: @user.errors.full_messages_for(:gender)
      }, status: 422
    end
  end
 
  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User not found"], status: 404
    end
  end


  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :email,
      :email_confirmation,
      :gender,
      :birthday
    )
  end
  
end

