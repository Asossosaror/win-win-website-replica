const navBar = document.querySelector('#nav-bar');
const main = document.querySelector('main');
const navBarLogo = document.querySelector('#nav-bar-logo-img');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > main.offsetTop) {
        navBar.classList.add('nav-bar-transparent');
        navBar.id = "nav-bar-transparent";
    } else {
        navBar.classList.remove('nav-bar-transparent');
        navBar.id = "nav-bar";
    }
});

$(document).ready(function(){
    $('.main-slider').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}