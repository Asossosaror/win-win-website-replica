const header = document.querySelector('#nav-bar');
const main = document.querySelector('main');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > main.offsetTop) {
        header.classList.add('nav-bar-transparent');
        
    } else {
        header.classList.remove('nav-bar-transparent');
        
    }
});