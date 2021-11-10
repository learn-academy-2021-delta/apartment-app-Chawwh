class ApartmentsController < ApplicationController
    before_action :authenticate_user!, :except => [:index, :show]

    def index
        appts = Apartment.all
        render json: appts
    end

    def show
        appt = Apartment.find(params[:id])
        render json: appt
    end

    def create
        appt = Apartment.create(appt_params)
        if appt.valid?
            render json: appt
        else
            render json: appt.errors, status:422
        end
    end

    def update
        appt = Apartment.find(params[:id])
        appt.update(appt_params)
        if appt.valid?
            render json: appt
        else
            render json: appt.errors, status: 422
        end
    end

    def destroy
        appt = Apartment.find(params[:id])
        appt.destroy
        render json: appt
    end

    private

    def appt_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :photo_url)
    end
end
