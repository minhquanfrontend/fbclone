let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle("active");
    menuForm.classList.remove('active');
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    menuForm.classList.remove('active');
    loginForm.classList.remove("active");
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    menuForm.classList.remove('active');
    shoppingCart.classList.remove("active");
    
}


let menuForm = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    menuForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

window.onscroll = () => {
    searchForm.classList.remove("active");
    menuForm.classList.remove('active');
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

// https://codesandbox.io/p/sandbox/fgtt4v?file=%2Findex.html%3A73%2C5-94%2C8

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});