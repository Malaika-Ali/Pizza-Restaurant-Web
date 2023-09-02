// SwiperJS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

// function to go to cart page from menu page
function replaceMenu(){
    window.location.replace("cart.html");
}

// function to go to checkout page from cart page
function replaceCheckout(){
    window.location.replace("checkout.html");
}
