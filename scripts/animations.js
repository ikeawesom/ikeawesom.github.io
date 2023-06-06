const titleanimation = () => {
    const red_spans = document.querySelectorAll(".red");
    const yellow_spans =  document.querySelectorAll(".yellow");
    red_spans.forEach((span, i) => {
        const cur_delay = 100*(i+2) + 1000;
        span.style.animationDelay = `${cur_delay}ms`
    })

    yellow_spans.forEach((span, i) => {
        const cur_delay = 100*(i+2) + 2500;
        span.style.animationDelay = `${cur_delay}ms`
    })
}

const fadeinanimation = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
            // else {
            //     entry.target.classList.remove('show')
            // }
        });
    })

    const hiddenElements = document.querySelectorAll(".scroll-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
}

function smoothScroll() {
    function smoothScrollHelper(target, duration) {
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top - 100;
        var startPosition = window.scrollY;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run) // (x-dir, y-dir)

            if (timeElapsed < duration) requestAnimationFrame(animation)
        }

        function ease(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t*t*t + 2) + b;
        };

        requestAnimationFrame(animation);
    }
    
    const navLinks = document.querySelectorAll("header a");
    navLinks.forEach((link) => {
        link.addEventListener('click',()=>{
            var section = link.href
            var selector = "#" + section.split("#")[1];
            if (selector === "#") {
                smoothScrollHelper("#landing",2000)
            } else {
                smoothScrollHelper(selector, 2000);
            }
        })
    })
}

function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

const runAnimations = () => {
    titleanimation();
    fadeinanimation();
    smoothScroll();
}

runAnimations()