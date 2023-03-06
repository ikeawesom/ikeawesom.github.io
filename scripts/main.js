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

}

// Main functions
function main() {
    bannnerAnimations();
}

main()
