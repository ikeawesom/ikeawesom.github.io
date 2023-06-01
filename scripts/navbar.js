const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navItems = document.querySelectorAll(".primary-navigation li");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility)

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible',"true")
        navToggle.setAttribute('aria-expanded',"true")
        navToggle.classList.toggle('rotate');
        navToggle.classList.remove('uil-apps');
        navToggle.classList.add('uil-times');
        
        navItems.forEach((item, i) => {
            item.setAttribute('data-visible',"true")
            item.style.transitionDelay = `${i*200 + 1000}ms`;
        })

    }
    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible',"false")
        navToggle.setAttribute('aria-expanded',"false")
        navToggle.classList.add('uil-apps');
        navToggle.classList.remove('uil-times');
        navToggle.classList.toggle('rotate');

        navItems.forEach((item) => {
            item.style.transitionDelay = `300ms`;
            item.setAttribute('data-visible',"false")
        })

    }
})