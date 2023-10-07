// Getting the button from the DOM
let submitButton = document.getElementById('button');

// Add event listener on click to the button - notice I added the event as an argument to the function
submitButton.addEventListener('click', function (event) {
    // prevent the reload of the page. here I prevent the event.
    event.preventDefault();

    // Getting the input values
    let fullName = document.getElementById('fullname').value;
    let email = document.getElementById('emailaddress').value;
    // removed for privacy
    emailjs.send("service_key", "template_key", { // removed for privacy
        "to_name": fullName,
        "from_email": email,
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
});