const submit = document.querySelector("#send")
const msg = document.querySelector(".contact-container .status")


submit.addEventListener('click', function(e) {
    e.preventDefault()
    submit.disabled = true;
    submit.classList.toggle("hidden");
   
    var fname = document.querySelector("#first_name").value;
    var lname = document.querySelector("#last_name").value;
    var email = document.querySelector("#email").value;
    var interest = document.querySelector("#interest").value;
    var desc = document.querySelector("#desc").value;
    var body = `name: ${fname} ${lname}\n
                email: ${email}\n
                interest: ${interest}\n
                desc: ${desc}`;


    var params = {
        from_name: fname,
        email_id: email,
        message: body,
    }


    setTimeout(() => {
        emailjs.send("service_wk1cz1p","template_hjtfasl", params).then(function (res) {
            msg.classList.toggle("active");


            setTimeout(() => {
                msg.classList.toggle("active");
                submit.classList.toggle("hidden");
                submit.disabled = false;
            }, 4400);
           
        })
    }, 1000);

})
