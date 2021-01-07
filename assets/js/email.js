function sendMail(contactForm) {
    emailjs.send("service_ui3w5sr", "locate-a-loo", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "subject": contactForm.subject.value,
        "reason": contactForm.reason.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("emailcheck").innerHTML= "Success! Your email has been sent.";
            document.getElementById("myForm").reset();
        },
        
        function(error) {
            console.log("FAILED", error);
        
        }
    );
    return false;
}


