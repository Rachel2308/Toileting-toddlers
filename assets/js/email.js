/* Code to send email through contact form */

function sendMail(contactForm) {
    emailjs.send("service_ui3w5sr", "locate-a-loo", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "subject": contactForm.subject.value,
            "reason": contactForm.reason.value
        })

/* Code to bring up a success message and clear form once email has been sent */        
        .then(
            function(response) {
                console.log("SUCCESS", response);
                document.getElementById("emailcheck").innerHTML = "Success! Your email has been sent.";
                contactForm.name.value = "";
                contactForm.emailaddress.value = "";
                contactForm.subject.value = "";
            },

/* Code to bring up a error message if problem with sending email */     

            function(error) {
                document.getElementById("emailcheck").innerHTML = "Unfortunately your email has not gone through. Please try again";

            }
        );
    return false;
}

