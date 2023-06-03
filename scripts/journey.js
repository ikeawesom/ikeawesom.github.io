// Whole Container
const journey_tab = document.querySelectorAll(".journey-tab");

journey_tab.forEach((tab) => {
    const arrow = tab.querySelector("i");
    const container = tab.querySelector(".sub-text");
    
    arrow.addEventListener('click',function(event) {
        event.preventDefault();

        if (!container.classList.contains('active')) {
            
            arrow.setAttribute("data-cur","180");
            
            container.classList.add('active');
            container.style.height = 'auto';
      
            var height = container.clientHeight + 'px';
      
            container.style.height = '0px';
      
            setTimeout(function () {
              container.style.height = height;
            }, 0);
            
          } else {

            arrow.setAttribute("data-cur","0");
            
            container.style.height = '0px';
            container.addEventListener('transitionend', function () {
              container.classList.remove('active');
            }, {
              once: true
            })
        }
    })
})