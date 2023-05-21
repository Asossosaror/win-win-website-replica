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

// Create the grid of colleagues on the "Kontakt"-page dynamically
fetch('colleagues_data.json')
    .then(response => response.json())
    .then(data => {
        for (const key in data) {
            console.log(data[key]["name"]);
            let grid = document.getElementById("our-colleagues-grid");
            let gridItem = document.createElement("div");
            let img = document.createElement("img");
            let h3Name = document.createElement("h3");
            let positionWork = document.createElement("p");
            let email = document.createElement("p");
            let phoneNum = document.createElement("p");
            gridItem.className = "our-colleagues-grid-item";
            img.className = "our-colleagues-grid-item-img";
            img.src = data[key]["img"];
            h3Name.innerHTML = data[key]["name"];
            positionWork.innerHTML = data[key]["position"];
            email.className = "small";
            email.innerHTML = data[key]["email"];
            phoneNum.className = "small";
            phoneNum.innerHTML = data[key]["phone_num"];
            gridItem.appendChild(img);
            gridItem.appendChild(h3Name);
            gridItem.appendChild(positionWork);
            gridItem.appendChild(email);
            gridItem.appendChild(phoneNum);
            grid.appendChild(gridItem);
        }
    })
    .catch(error => {
        console.log('There was an error loading data: ', error)
    })