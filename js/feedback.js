
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();
   
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value;

    // Display success message
    const message = document.getElementById("message");

    message.innerHTML =
        "Thank you " + name + "! Your feedback has been submitted successfully.";

    message.style.color = "green";

    // Display data in console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    // Reset form
    form.reset();

});
