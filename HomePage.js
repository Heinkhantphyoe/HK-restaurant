let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  btn.classList.toggle("close");
});

ScrollReveal().reveal(".box", {
  distance: "40px", // Distance from the element to start animating
  origin: "bottom", // Origin of animation
  duration: 1200, // Duration of animation
  viewFactor: 0.1,
  interval: 200,
  scale: 0.9,
  reset: false, // Resets the animation when scrolling up
});

let list = document.getElementById("list");
let listCart = document.querySelector(".listCart");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let body = document.querySelector(".body");

function openShopping() {
  let cart = document.querySelector(".cart");
  cart.classList.add("active");
}

function closeShopping() {
  let cart = document.querySelector(".cart");
  cart.classList.remove("active");
}

let products = [
  {
    id: 1,
    name: "Beer",
    price: 1800,
    img: "./Images/img1.jpg",
  },

  {
    id: 2,
    name: "Lorem",
    price: 8000,
    img: "./Images/img2.jpg",
  },

  {
    id: 3,
    name: "Potato",
    price: 3500,
    img: "./Images/img3.jpg",
  },

  {
    id: 4,
    name: "Pork Curry",
    price: 7500,
    img: "./Images/img4.jpg",
  },

  {
    id: 5,
    name: "Noodle",
    price: 9000,
    img: "./Images/img5.jpg",
  },

  {
    id: 6,
    name: "Malar Xing Go",
    price: 15000,
    img: "./Images/img6.jpg",
  },
  {
    id: 7,
    name: "Noodle",
    price: 7500,
    img: "./Images/img7.jpg",
  },
  {
    id: 8,
    name: "Deserts",
    price: 20000,
    img: "./Images/img8.jpg",
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let colDiv = document.createElement("div");
    colDiv.classList.add("col");
    colDiv.classList.add("box");
    list.append(colDiv);
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img  src = "${value.img}"/>
      <div class="title"> ${value.name}</div>
      <div class="price"> ${value.price.toLocaleString()}</div>
      <button>Order</button>
      `;

    colDiv.appendChild(newDiv);
  });
}

initApp();


 var swiper = new Swiper(".mySwiper1", {
   pagination: {
     el: ".swiper-pagination",
     dynamicBullets: true,
   },
   autoplay: {
     delay: 3000, // Set the delay between slides (in milliseconds)
     disableOnInteraction: false, // Allow manual interaction to not pause autoplay
   },
  
 });

 

 var swiper2 = new Swiper(".mySwiper2", {
   slidesPerView: 3,
   spaceBetween: 30,
   freeMode: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   autoplay: {
     delay: 3000, // Set the delay between slides (in milliseconds)
     disableOnInteraction: false, // Allow manual interaction to not pause autoplay
   },
   breakpoints: {
     // When window width is <= 768px
     768: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     // When window width is <= 1024px
     1024: {
       slidesPerView: 3,
       spaceBetween: 15,
     },
    
     390: {
       slidesPerView: 1,
       spaceBetween: 10,
     },
   },
 });