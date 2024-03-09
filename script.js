// Image Gallery Functionality
const hotels = [
    {
        id: 1,
        images: [
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Cave in Noyers-sur-Cher, France",
        placename: "Paris",
        beds: "1 Single Bed",
        price: 2500,
        rating: 4.5,
        description: "Stay in this beautiful cave located in Noyers-sur-Cher, France. Experience the unique charm of cave living while surrounded by stunning natural scenery."
    },
    {
        id: 2,
        images: [
            "https://images.pexels.com/photos/208603/pexels-photo-208603.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/290538/pexels-photo-290538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Earthen home in Terrasini, Italy",
        placename: "Rome",
        beds: "1 Bed",
        price: 2800,
        rating: 4.0,
        description: "Experience the tranquility of nature in this earthen home nestled in the beautiful countryside of Terrasini, Italy. Relax and unwind in this unique retreat."
    },
    {
        id: 3,
        images: [
            "https://images.pexels.com/photos/568237/pexels-photo-568237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/290538/pexels-photo-290538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Home in Vrådal, Norway",
        placename: "Oslo",
        beds: "1 Bed",
        price: 3000,
        rating: 4.2,
        description: "Stay in this cozy home located in the picturesque town of Vrådal, Norway. Enjoy the breathtaking views of the surrounding mountains and lakes."
    },
    {
        id: 4,
        images: [
            "https://images.pexels.com/photos/301469/pexels-photo-301469.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Place to stay in Cumbria, UK",
        placename: "London",
        beds: "1 Double Bed",
        price: 2700,
        rating: 4.8,
        description: "Discover the beauty of Cumbria, UK with a stay in this charming place. Relax in comfort and explore the stunning countryside nearby."
    },
    {
        id: 5,
        images: [
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/301469/pexels-photo-301469.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Room in Loceri, Italy",
        placename: "Milan",
        beds: "1 Single Bed",
        price: 3200,
        rating: 4.1,
        description: "Stay in this cozy room located in the heart of Loceri, Italy. Experience the warmth of Italian hospitality and explore the nearby attractions."
    },
    {
        id: 6,
        images: [
            "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Cave in Cotignac, France",
        placename: "Nice",
        beds: "1 Double Bed",
        price: 2900,
        rating: 4.3,
        description: "Experience the charm of cave living in this unique accommodation located in Cotignac, France. Relax and unwind in a cozy cave environment."
    },
    {
        id: 7,
        images: [
            "https://images.pexels.com/photos/301469/pexels-photo-301469.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Stay with Alba",
        placename: "Barcelona",
        beds: "1 Single Bed",
        price: 2800,
        rating: 4.0,
        description: "Experience a unique stay with Alba in this cozy accommodation. Enjoy personalized hospitality and explore the surrounding area."
    },
    {
        id: 8,
        images: [
            "https://images.pexels.com/photos/302820/pexels-photo-302820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Troglodyte house in the tuf cliff",
        placename: "Madrid",
        beds: "1 Bed",
        price: 3100,
        rating: 4.7,
        description: "Stay in this historic troglodyte house nestled in the tuf cliff. Experience the charm of traditional living in a unique natural setting."
    },
    {
        id: 9,
        images: [
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/301469/pexels-photo-301469.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Tipi Apache des monteaux",
        placename: "Berlin",
        beds: "1 Single Bed",
        price: 3300,
        rating: 4.6,
        description: "Immerse yourself in the culture of the Apache tribe with a stay in this authentic Tipi located in the serene surroundings of Monteaux."
    },
    {
        id: 10,
        images: [
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/301469/pexels-photo-301469.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Moon Conker, unique riverside tree pod with fire",
        placename: "Vienna",
        beds: "1 Double Bed",
        price: 3500,
        rating: 4.8,
        description: "Experience a magical stay in the Moon Conker, a unique riverside tree pod equipped with a cozy fire pit. Enjoy breathtaking views and ultimate relaxation."
    },
    {
        id: 1,
        images: [
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Cave in Noyers-sur-Cher, France",
        placename: "Paris",
        beds: "1 Single Bed",
        price: 2500,
        rating: 4.5,
        description: "Stay in this beautiful cave located in Noyers-sur-Cher, France. Experience the unique charm of cave living while surrounded by stunning natural scenery."
    },
    {
        id: 1,
        images: [
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Cave in Noyers-sur-Cher, France",
        placename: "Paris",
        beds: "1 Single Bed",
        price: 2500,
        rating: 4.5,
        description: "Stay in this beautiful cave located in Noyers-sur-Cher, France. Experience the unique charm of cave living while surrounded by stunning natural scenery."
    },
    {
        id: 1,
        images: [
            "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Cave in Noyers-sur-Cher, France",
        placename: "Paris",
        beds: "1 Single Bed",
        price: 2500,
        rating: 4.5,
        description: "Stay in this beautiful cave located in Noyers-sur-Cher, France. Experience the unique charm of cave living while surrounded by stunning natural scenery."
    },
    {
        id: 1,
        images: [
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Cave in Noyers-sur-Cher, France",
        placename: "Paris",
        beds: "1 Single Bed",
        price: 2500,
        rating: 4.5,
        description: "Stay in this beautiful cave located in Noyers-sur-Cher, France. Experience the unique charm of cave living while surrounded by stunning natural scenery."
    },
    {
        id: 1,
        images: [
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            // Add more image URLs here as needed
        ],
        hotelname: "Cave in Noyers-sur-Cher, France",
        placename: "Paris",
        beds: "1 Single Bed",
        price: 2500,
        rating: 4.5,
        description: "Stay in this beautiful cave located in Noyers-sur-Cher, France. Experience the unique charm of cave living while surrounded by stunning natural scenery."
    },
    // Add more objects with random names, descriptions, and other properties...
];

const hotelContainer = document.getElementById("hotels");


function fetchData(hotelsData) {
    document.querySelector('.hamburger-icon').addEventListener('click', function() {
        document.querySelector('.navbar-items').classList.toggle('active');
    });
    hotelsData.forEach((hotel, index) => {
        let div = document.createElement('div');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        // Create previous button
        let prevButton = document.createElement('button');
        prevButton.textContent = '';
        prevButton.classList.add('prev-button');
        prevButton.addEventListener('click', () => {
            showPrevImage(hotel, image);
        });

        // Create next button
        let nextButton = document.createElement('button');
        nextButton.textContent = '';
        nextButton.classList.add('next-button');
        nextButton.addEventListener('click', () => {
            showNextImage(hotel, image);
        });

        // Create image element
        let image = document.createElement('img');
        image.src = hotel.images[0]; // Display the first image initially
        image.classList.add('hotel-image');

        // Create hotel name element
        let hotelName = document.createElement('p');
        hotelName.textContent = hotel.hotelname;
        hotelName.classList = "hotelName";

        let desc = document.createElement('p');
        desc.textContent = hotel.description;
        desc.classList = "hotelDetails";

        // Create place name element
        let placeName = document.createElement('p');
        placeName.textContent = `Location: ${hotel.placename}`;
        placeName.classList = "hotelDetails";

        // Create beds element
        let beds = document.createElement('p');
        beds.textContent = `Beds: ${hotel.beds}`;
        beds.classList = "hotelDetails";

        // Create rating element
        let rating = document.createElement('p');
        rating.textContent = `Rating: ${hotel.rating}/5`;
        rating.classList = "hotelDetails";

        let price = document.createElement('p');
        price.textContent = `Price: ${hotel.price}$/Night`;
        price.classList = "hotelDetails";

        let heartButtonContainer = document.createElement('div');
        heartButtonContainer.classList.add('heart-button-container'); // Add a class to the container for styling

        let heartButton = document.createElement('button');
        heartButton.textContent = '♡'; // Heart symbol
        heartButton.classList.add('heart-button');

        // Event listener for heart button click
        heartButton.addEventListener('click', () => {
            heartButton.classList.toggle('clicked'); // Toggle clicked class for styling
            toggleWishlist(hotel.id);
        });

        heartButtonContainer.appendChild(heartButton);

        // Append all elements to the div
        imageContainer.append(prevButton, image, nextButton,);
        div.append(imageContainer, hotelName, desc, placeName, beds, rating, price, heartButtonContainer);
        // Append the div to the hotel container
        hotelContainer.appendChild(div);
    });
}


function showNextImage(hotel, imageElement) {
    let currentIndex = hotel.images.indexOf(imageElement.src);
    let nextIndex = (currentIndex + 1) % hotel.images.length;
    imageElement.src = hotel.images[nextIndex];
}

function showPrevImage(hotel, imageElement) {
    let currentIndex = hotel.images.indexOf(imageElement.src);
    let prevIndex = (currentIndex - 1 + hotel.images.length) % hotel.images.length;
    imageElement.src = hotel.images[prevIndex];
}

fetchData(hotels);