function sendMail(contactForm) {
    emailjs.send("service_ui3w5sr", "locate-a-loo", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_reason": contactForm.subject.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        
        }
    );
    return false;
}