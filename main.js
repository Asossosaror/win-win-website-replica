const navBar = document.querySelector('#nav-bar');
const main = document.querySelector('main');
const navBarLogo = document.querySelector('#nav-bar-logo-img');

// Make the navigation bar slightly transparent when it is scrolled down from it's original state.
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

// Toggle the dropdown menu in the navigation bar.
document.addEventListener('mouseover', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) {
        return;
    }

    let currentDropdown;
    if(isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown) {
            return;
        }
        dropdown.classList.remove('active');
    });
})

// Slider
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
})

// Scoll to the top of the screen. This function is called when the arrow in the footer is clicked.
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}