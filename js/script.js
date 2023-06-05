// Toggle menu
const hamburgerMenu = document.querySelector('#hamburger-menu')
const navbarNav = document.querySelector('.navbar-nav')

hamburgerMenu.addEventListener('click', function() {
    navbarNav.classList.toggle('active')
})


// klik di luar sidebar untuk menghilangkan menu
document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})