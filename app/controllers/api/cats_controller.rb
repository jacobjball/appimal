class Api::CatsController < ApplicationController

    def index 
      render json: Cat.all
    end

    def show
      render json: Cat.find(params[:id])
    end

    def create
      cat = Cat.new(cat_params)
      if cat.save
        render json: cat
      else
        render json: { message: "No cat created"}
      end 
    end

    def update
      cat = Cat.find(params[:id])
      if cat.update(cat_params)
        render json: cat
      else
        render json: { message: "Cats don't change!"}
      end
    end

    def destroy
      Cat.find(params[:id]).destroy
      render json: { message: "Exploding Cats!"}
    end

  private

    def cat_params
      params.require(:cat).permit(:name, :color, :cost)
    end

end


