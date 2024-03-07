// Image Gallery Functionality
const hotels = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Alpha",
        placename: "City A",
        beds: "1 Single Bed",
        price: 2500,
        rating: 4.5
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Beta",
        placename: "City B",
        beds: "1 Bed",
        price: 2800,
        rating: 4.0
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Gamma",
        placename: "City C",
        beds: "1 Double Bed",
        price: 2200,
        rating: 4.2
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/9242/light-sunset-water-boat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Delta",
        placename: "City D",
        beds: "1 Single Bed",
        price: 2700,
        rating: 4.8
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/621807/pexels-photo-621807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Epsilon",
        placename: "City E",
        beds: "1 Bed",
        price: 2900,
        rating: 3.9
    },
    {
        id: 6,
        image: "https://images.pexels.com/photos/7245097/pexels-photo-7245097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Zeta",
        placename: "City F",
        beds: "1 Double Bed",
        price: 2600,
        rating: 4.1
    },
    {
        id: 7,
        image: "https://images.pexels.com/photos/326081/pexels-photo-326081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Eta",
        placename: "City G",
        beds: "1 Single Bed",
        price: 2300,
        rating: 4.6
    },
    {
        id: 8,
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Theta",
        placename: "City H",
        beds: "1 Bed",
        price: 2950,
        rating: 4.7
    },
    {
        id: 9,
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        hotelname: "Hotel Iota",
        placename: "City I",
        beds: "1 Double Bed",
        price: 2550,
        rating: 3.7
    },
    {
        id: 10,
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g",
        hotelname: "Hotel Kappa",
        placename: "City J",
        beds: "1 Single Bed",
        price: 2450,
        rating: 4.4
    }
];

const hotelContainer = document.getElementById("hotels");

function fetchData(hotelsData) {
    hotelsData.forEach((hotel, index) => {
        let div = document.createElement('div');

        // Create image element
        let image = document.createElement('img');
        image.src = hotel.image;

        // Create hotel name element
        let hotelName = document.createElement('p');
        hotelName.textContent = hotel.hotelname;
        hotelName.classList="hotelName"

        // Create place name element
        let placeName = document.createElement('p');
        placeName.textContent = `Location: ${hotel.placename}`;
        placeName.classList="hotelDetails"


        // Create beds element
        let beds = document.createElement('p');
        beds.textContent = `Beds: ${hotel.beds}`;
        beds.classList="hotelDetails"


        // Create rating element
        let rating = document.createElement('p');
        rating.textContent = `Rating: ${hotel.rating}`;
        rating.classList="hotelDetails"


        let price = document.createElement('p');
        price.textContent = `Price: ${hotel.price}`;
        price.classList="hotelDetails"


        // Append all elements to the div
        div.append(image, hotelName, placeName, beds, rating, price);

        // Append the div to the hotel container
        hotelContainer.appendChild(div);
    });
}

fetchData(hotels);