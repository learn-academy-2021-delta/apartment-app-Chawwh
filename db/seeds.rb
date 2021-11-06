apartments = [
    {
        id:1,
        street:"42 Wallaby Way",
        city: "Sydney",
        state:"New South Wales",
        manager:"Marlin The Fish",
        email:"marlin@findingnemo.com",
        price:"375000",
        bedrooms: 2,
        bathrooms: 1.5,
        pets:"fish only",
        user_id: 1
    },
    {
        id:2,
        street:"1000 Oak Lane",
        city:"Pallet",
        state:"Kanto",
        manager:"Professor Oak",
        email:"oak@pokemon.com",
        price:"3000000",
        bedrooms: 3,
        bathrooms: 2.0,
        pets:"all types welcome",
        user_id: 1
    },
    {
        id:3,
        street:"123 Sesame Street",
        city: "Manhattan",
        state:"New York",
        manager:"Elmo The Monster",
        email:"elmo@sesamestreet.org",
        price:"750000",
        bedrooms: 4,
        bathrooms: 2.5,
        pets:"sure why not",
        user_id: 1
    },
    {
        id:4,
        street:"345 Cave Stone Road",
        city: "Bedrock",
        state:"Bedrock",
        manager:"Fred Flintstone",
        email:"fred@flintstones.com",
        price:"150000",
        bedrooms: 1,
        bathrooms: 1.0,
        pets:"Dinos only",
        user_id: 1
    }
]

apartments.each do |attributes|
    Apartment.create attributes
    p "creating apartments #{attributes}"
end