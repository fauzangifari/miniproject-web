const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const formData = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
  form.reset();
  alert("Your message has been sent successfully!");
});