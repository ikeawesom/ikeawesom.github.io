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

const runAnimations = () => {
    titleanimation()
}

runAnimations()