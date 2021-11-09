class Apartment < ApplicationRecord
    validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :photo_url, presence: true
    validates :price, length: {minimum: 4}
    belongs_to :user
end
