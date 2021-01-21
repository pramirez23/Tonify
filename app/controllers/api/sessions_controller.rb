class Api::SessionsController < ApplicationController

  def create
    
    username = params[:user][:username]
    password = params[:user][:password]
``
    @user = User.find_by_credentials(username, password)

    if @user
      login!(@user)
      render "/api/users/show"
    else
      render json: ["Incorrect username or password."], status: 401
    end

  end

  def destroy
    @user = current_user

    if @user
      logout!
      render json: {message: "Successfully logged out."}
    else
      render json: ["There is no user logged in."], status: 404
    end
  end 

end