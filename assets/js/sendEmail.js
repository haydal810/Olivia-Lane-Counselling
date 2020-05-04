function sendMail(contact_form) {
    emailjs.send("gmail", "olivia_lane_counselling_website", {
        "message": contact_form.message.value,
        "from_name": contact_form.name.value,
        "from_email": contact_form.emailaddress.value,
        "from_phone_number": contact_form.phone.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                setTimeout("window.location.href = 'Thank_you_for_your_message.html';", 250); // the user will know that their message was sent successfully and is given feedback.
                document.getElementById("contact_form").reset() // the form is reset after submit button is hit
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page...
}