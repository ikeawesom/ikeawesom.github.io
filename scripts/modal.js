var modal = document.getElementById("services-modal");

// Get the button that opens the modal
var btn = document.querySelectorAll("#services .uil-arrow-down-right");
var container = document.querySelectorAll("#services-modal .modal-container");

// Get the <span> element that closes the modal
var span = document.querySelectorAll("#services-modal .close");

// When the user clicks on the button, open the modal
btn.forEach((button, index) => {
    button.onclick = function() {
        modal.classList.toggle("active");
        modal.style.display = "grid";
        container[index].classList.toggle("active");
        console.log(index)
    }
})

// When the user clicks on <span> (x), close the modal
span.forEach((close, index) => {
    close.onclick = function() {
        modal.style.display = "none";
        modal.classList.toggle("active");
        container[index].classList.toggle('active')
    }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.toggle("active");
    modal.style.display = "none";
    container.forEach((block) => {
        block.classList.remove('active');
    })
  }
}