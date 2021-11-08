require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'reeer@yike.net', password: '123456', password_confirmation: '123456'
  end
  describe "GET /index" do
    it 'gets all the apartments' do
      Apartment.create street: '404 Da Wae street',
       city: 'VR Chat', 
       state:'Steam', 
       manager:'Uganda Knuckles', 
       email:'Ugandaknuckles@dawae.com', 
       price:'650000', 
       bedrooms: 3, 
       bathrooms: 2.5, 
       pets:'Rats allowed',
       photo_url: 'http://people.ucsc.edu/~jheo2/dawaee.jpg',
       user_id: user.id

      get '/apartments'
      appt = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(appt.length).to eq 1
    end
  end

end
