class Api::FoodsController < ApplicationController
  def index 
    render json: Food.all
  end

  def show
    render json: Food.find(params[:id])
  end

  def create
    food = Food.new(food_params)
    if food.save
      render json: food
    else
      render json: { message: "No food created"}
    end 
  end

  def update
    food = Food.find(params[:id])
    if food.update(food_params)
      render json: food
    else
      render json: { message: "Foods!, you eat don't change"}
    end
  end

  def destroy
    Food.find(params[:id]).destroy
    render json: { message: "Exploding Foods!"}
  end

private

  def food_params
    params.require(:food).permit(:name)
  end


end
