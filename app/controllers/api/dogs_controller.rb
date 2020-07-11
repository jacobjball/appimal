class Api::DogsController < ApplicationController

  before_action :set_user
  before_action :set_dog, only: [:show, :edit, :update, :destroy]

  def index
    render json: @user.dogs.all
  end

  def create
    dog = @user.dogs.new(dog_params)
    if dog.save
      render json: dog
    else
      render json: { meesage: "To create a dog is to have the ultimate power"}
    end
  end

  def update
    @dog = @user.dogs.find(params[:id])
    if @dog.update(dog_params)
      render json: @dog
    else
      render json: { message: "Dogs, why do you want to change them?" }
    end
  end
      

  def destroy
    @user.dogs.find(params[:id]).destroy
    render json: { mesage: 'Dog Poof!'}
  end
  
  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_dog
    @dog = @user.dogs.find(params[:id])
  end
  
  def dog_params
    params.require(:dog).permit(:name, :breed, :age, :user_id)
  end

end
