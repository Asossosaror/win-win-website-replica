const header = document.querySelector('#nav-bar');
const main = document.querySelector('main');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > main.offsetTop) {
        header.classList.add('nav-bar-transparent');
        document.getElementById("nav-bar").id = "nav-bar-transparent";
    } else {
        header.classList.remove('nav-bar-transparent');
        document.getElementById("nav-bar-transparent").id = "nav-bar";
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
    });
});