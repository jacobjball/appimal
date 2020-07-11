class Api::ToysController < ApplicationController
  def index 
    render json: Toy.all
  end

  def show
    render json: Toy.find(params[:id])
  end

  def create
    toy = Toy.new(toy_params)
    if toy.save
      render json: toy
    else
      render json: { message: "No toy created"}
    end 
  end

  def update
    toy = Toy.find(params[:id])
    if tpy.update(toy_params)
      render json: toy
    else
      render json: { message: "Toys are destroyed! Never changed!"}
    end
  end

  def destroy
    Toy.find(params[:id]).destroy
    render json: { message: "DESTORYED!"}
  end

private

  def toy_params
    params.require(:toy).permit(:name)
  end


end
