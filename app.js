let products = {
    data: [
      {
        productName: "Ultimate Spider-man (2024)",
        category: "comics",
        price: "4.99",
        image: "ultimatespidey.jpg",
      },
      {
        productName: "House of X (2019)",
        category: "comics",
        price: "4.99",
        image: "hofx.jpg",
      },
      {
        productName: "Powers of X (2019)",
        category: "comics",
        price: "4.99",
        image: "pofx.jpg",
      },
      {
        productName: "Xbox Series S",
        category: "consoles",
        price: "299",
        image: "seriesS.webp",
      },
      {
        productName: "Xbox Series X",
        category: "consoles",
        price: "429",
        image: "seriesx.jpg",
      },
      {
        productName: "Playstation 5",
        category: "consoles",
        price: "459",
        image: "ps5.jpg",
      },
      {
        productName: "Prey",
        category: "games",
        price: "59.99",
        image: "Prey---Xbox-One.jpg",
      },
      {
        productName: "Gears of War",
        category: "games",
        price: "59.99",
        image: "Gears-of-War-Ultimate-Edition.webp",
      },
      {
        productName: "Fallout 4",
        category: "games",
        price: "59.99",
        image: "fallout4.webp",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });

    if (data != "") { displaySearch(); }
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    displaySearch();
  });

  function displaySearch()
  {
        //initializations
        let searchInput = document.getElementById("search-input").value;
        data = searchInput;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");
      
        //loop through all elements, displaying all default
        elements.forEach((element, index) => {
          //check if text does not include the search value
            if (!element.innerText.includes(searchInput.toUpperCase())) {
            //hide matching card
            cards[index].classList.add("hide"); // hiding
            }
            if (element.innerText(searchInput) == "")
              {
                cards[index].classList.remove("hide"); // hiding
              }
        });
  }
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
