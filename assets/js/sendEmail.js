function sendMail(contact) {
    emailjs.send("gmail", " ", {
        "message": contact.message.value,
        "from_name": contact.name.value,
        "from_email": contact.emailaddress.value,
        "from_phone_number": contact.phone.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                setTimeout("window.location.href = 'Thank_you_for_your_message.html';", 250); // the user will know that their message was sent successfully and is given feedback.
                document.getElementById("contactForm").reset() // the form is reset after submit button is hit
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page...
}