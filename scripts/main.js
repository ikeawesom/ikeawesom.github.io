function bannnerAnimations() {
    // Arrow Animation for Start
    setTimeout(() => {
        const bouncingArrow = document.querySelector("#banner .next i");
        bouncingArrow.style.animation = "fade-in 1s ease-in forwards"
        setTimeout(() => {
            bouncingArrow.style.opacity = "1";
            bouncingArrow.style.animation = "floating 2s infinite ease-in-out"
        }, 1100);
    }, 4600);

    // Animations for moving circles
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle)=> {
        var top = Math.floor(Math.random() * 90);
        var right = Math.floor(Math.random() * 50);
        circle.style = `top:${top}%; right:${right}%`
        var colour = circle.getAttribute("data-colour")
        var delay = Math.abs(circle.getAttribute("data-move"));
        circle.style.animationDelay = `${4500 + delay*200}ms`
        circle.style.backgroundColor = colour;
    })

    document.addEventListener('mousemove',parallex);

    function parallex(e) {
        circles.forEach(function(move) {
            var moving_val = move.getAttribute("data-move");
            var x = e.clientX * moving_val / 100;
            var y = e.clientY * moving_val / 100;

            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }
}

// Main functions
function main() {
    bannnerAnimations();
}

main()
