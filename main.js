// Menu Section 

function menuHandler() {
    document.querySelector("#open-nav-menu").addEventListener("click", function (){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });

}

// Greeting Section 

function celsiusTofahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

let horaAtual = new Date().getHours();
let greetingText;

if (horaAtual > 0 && horaAtual < 5) {
    greetingText = "Good night!";
}
else if (horaAtual >= 5 && horaAtual < 12 ) {
    greetingText = "Good morning!";
} else if (horaAtual >= 12 && horaAtual < 18) {
    greetingText = "Good afternoon!";
} else if (horaAtual >= 18 && horaAtual < 23) {
    greetingText = "Good evening!";
} else if (horaAtual >=23) {
    greetingText = "Good night!";
    
} else {
    greetingText = "Welcome!";
}


const weatherCondition = "sunny";
const userLocation = "Londres"
const temperature = 20;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusTofahr(temperature).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function (e){
    //celsius
    //fahr

    if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
    }

});

//new Date().getHours()
//new Date().getMinutes()
//new Date().getSeconds()


setInterval(function(){
let localtime = new Date();
document.querySelector("span[data-time=hours]").textContent = localtime.getHours().toString().padStart(2,"0");
document.querySelector("span[data-time=minutes]").textContent = localtime.getMinutes().toString().padStart(2,"0");
document.querySelector("span[data-time=seconds]").textContent = localtime.getSeconds().toString().padStart(2,"0");
},100);

const galleryImagens = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnil Image 1"    
    },

    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnil Image 2"    
    },

    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnil Image 3"    
    },

];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image:"./assets/products/img6.png"

    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]

/*for(let i in galleryImagens) {
    console.log(galleryImagens[i]);
} */

let mainImage = document.querySelector("#gallery > img");
let Thumbnails = document.querySelector("#gallery .thumbnails");


mainImage.src = galleryImagens [0].src;
mainImage.alt = galleryImagens [0].alt;
//<img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true"></img>


galleryImagens.forEach(function(image,index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;

    thumb.addEventListener("click", function(e){
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImagens[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;

      Thumbnails.querySelectorAll("img").forEach(function(img){
        img.dataset.selected = false;

    });

       
        e.target.dataset.selected = true;
});
    

    Thumbnails.appendChild(thumb);

});

// Products Section

function populateProducts(productList) {
       
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";
    // Run a loop through the products and create an HTML element ("product-item") for each of them
       productList.forEach(function(product, index){
        
        // Create the HTML element for the individual product
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");
    
        // Create the product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;
    
        // Create the product details section 
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
    
        // Create product title, author, price-title and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;
    
        let priceAuthor = document.createElement("p"); 
        priceAuthor.classList.add("product-author"); 
        priceAuthor.textContent = product.author;
    
        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "Price";
    
        let productPrice = document.createElement("p"); 
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2): "Free";
    
        // Add all child HTML elements of the product
        productElm.append(productImage);
        productElm.append(productDetails);
    
        // Append the product details
        productDetails.append(productTitle);
        productDetails.append(priceAuthor); 
        productDetails.append(priceTitle);
        productDetails.append(productPrice); 
    
        // Add completo individul product to the product section
        productsSection.append(productElm);
    });

}

function productsHandler(){


    let freeProducts = products.filter(function(item){
        return !item.price || item.price <= 0;
    });
    let paidProducts = products.filter(function(item){
        return item.price > 0;
    });

    populateProducts(products);

   
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productsFilter = document.querySelector(".products-filter");

    productsFilter.addEventListener("click", function(e){
        if (e.target.id === "all") {
            populateProducts(products);
        } else if (e.target.id === "paid") {
            populateProducts(paidProducts);
        } else if (e.target.id === "free") {
            populateProducts(freeProducts);
        }
    });

}


// Page Load

menuHandler();
productsHandler();


