// Contact form handling
const form = document.querySelector("#contact form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      // Show success message
      successMessage.style.display = "block";
      successMessage.classList.remove("fade-out"); // reset if used before

      // Clear form fields
      form.reset();

      // After 2 seconds, fade out smoothly
      setTimeout(() => {
        successMessage.classList.add("fade-out");
        // After fade-out animation ends, hide completely
        setTimeout(() => {
          successMessage.style.display = "none";
          successMessage.classList.remove("fade-out");
        }, 800); // match fadeOut duration in CSS
      }, 2000);
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  }).catch(error => {
    alert("Error submitting form. Please try again later.");
  });
});
