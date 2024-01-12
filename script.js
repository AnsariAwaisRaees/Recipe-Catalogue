document.addEventListener('DOMContentLoaded', function () {

    let reciepes = [
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];


    let filteredReciepes = [...reciepes];
    let searchBar = document.getElementById("searchBar");

    document.getElementById("showAll").addEventListener('click', () => filteredReciepesfn());
    document.getElementById("showveg").addEventListener('click', () => filteredReciepesfn('veg'));
    document.getElementById("shownonveg").addEventListener('click', () => filteredReciepesfn('non-veg'));

    searchBar.addEventListener("input", (e) => {
        let searchText = e.target.value.toLowerCase();
        filteredReciepes = reciepes.filter((reciepe) => 
            reciepe.name.toLowerCase().includes(searchText)
        );
        DisplayReciepes(filteredReciepes);
    });

    let ReciepeContainer = document.getElementById("reciepeContainer");

    function DisplayReciepes(ReciepesToDisplay) {
        ReciepeContainer.innerHTML = "";
        ReciepesToDisplay.forEach(recipe => {
            let card = document.createElement('div');
            card.className = "reciepe-card";
            card.innerHTML = `
            <img src="${recipe.imageSrc}" height="200px">
            <h3>${recipe.name}</h3>
            <p>${recipe.type}</p>
            <p>${recipe.rating}</p>
            `;

            ReciepeContainer.appendChild(card);
        });
    }
    DisplayReciepes(reciepes);

    function filteredReciepesfn(type = "all") {
        if (type == "all") {
            DisplayReciepes(reciepes);
        }
        else {
            filteredReciepes = reciepes.filter((reciepe) => reciepe.type == type);
            DisplayReciepes(filteredReciepes);
        }
    }

    document.querySelectorAll('input[name="ratingFilter"]').forEach((radio) => {
        radio.addEventListener("change", filterByRating);
    }); 
    
    function filterByRating() {
        let ratingAbove = document.getElementById("ratingabove").checked;
        let ratingBelow = document.getElementById("ratingbelow").checked;
    
        filteredReciepes = reciepes.filter((reciepe) => {
            if(ratingAbove && reciepe.rating > 4.0) return true;
            if(ratingBelow && reciepe.rating < 4.0) return true;
    
            return false;
        });
    
        DisplayReciepes(filteredReciepes); 
    }
});