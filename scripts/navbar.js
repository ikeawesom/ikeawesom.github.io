const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navItems = document.querySelectorAll(".primary-navigation li");

function setFalse() {
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
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible',"true")
        navToggle.setAttribute('aria-expanded',"true")
        navToggle.classList.toggle('rotate');
        navToggle.classList.remove('uil-apps');
        navToggle.classList.add('uil-times');
        
        navItems.forEach((item, i) => {
            item.setAttribute('data-visible',"true")
            item.style.transitionDelay = `${i*200 + 800}ms`;
            item.addEventListener('click',()=>{
                setFalse()
            })
        })

    }
    else if (visibility === "true") {
        setFalse();
    }
})

function navScroll() {
    window.onscroll = function() {
        var top = window.scrollY;
        var landing = document.querySelector(".page-landing")
        var landing_height = document.querySelector("#landing").getBoundingClientRect().height;
        var about = document.querySelector(".page-about");
        var about_height = document.querySelector("#about").getBoundingClientRect().height;
        var services = document.querySelector(".page-services");
        var services_height = document.querySelector("#services").getBoundingClientRect().height;
        var portfolio = document.querySelector(".page-portfolio");
        var portfolio_height = document.querySelector("#portfolio").getBoundingClientRect().height;

        if (top < landing_height) {
            landing.classList.add('active');
            about.classList.remove('active');
            services.classList.remove('active');
            portfolio.classList.remove('active');
        }
        else if (top >= landing_height && top <= landing_height + about_height) {
            landing.classList.remove('active');
            about.classList.add('active');
            services.classList.remove('active');
            portfolio.classList.remove('active');
        }
        else if (top >= landing_height + about_height && top <= landing_height + about_height + services_height) {
            landing.classList.remove('active');
            about.classList.remove('active');
            services.classList.add('active');
            portfolio.classList.remove('active');
        }
        else if (top >= landing_height + about_height + services_height + vh(20)) {
            landing.classList.remove('active');
            about.classList.remove('active');
            services.classList.remove('active');
            portfolio.classList.add('active');
        }
    }
}

navScroll();