
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    // Stop page refresh
    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let timeLimit = document.getElementById("timeLimit").value;
    let message = document.getElementById("message").value.trim();

    // Get result element
    let result = document.getElementById("result");

    // Check empty fields
    if (name === "" || email === "" ||
        timeLimit === "" || message === "") {

        result.innerHTML = "Please fill all fields.";
        result.style.color = "red";
   
        return;
    }

    // Display success message
    result.innerHTML =
        "Thank you " + name + "! Your contact form submitted successfully.";

    result.style.color = "green";

    // Display data in console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Time Limit:", timeLimit);
    console.log("Message:", message);

    // Clear form
    form.reset();

});
