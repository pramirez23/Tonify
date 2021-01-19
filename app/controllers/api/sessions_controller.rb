class Api::SessionsController < ApplicationController
  
  def destroy
    @user = current_user

    if @user
      logout!
      render {}
    else
      render json: ["No current user"], status: 404
    end
  end 

end