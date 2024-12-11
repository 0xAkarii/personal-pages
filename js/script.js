// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Click outside sidebar
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Hide sidebar when user click on links
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768){
        if(navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    }
})

