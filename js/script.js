const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const greetingMsg = document.getElementById("greeting-msg");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = nameInput.value.trim();
  const visitorEmail = emailInput.value.trim();

  if (!visitorEmail) {
    greetingMsg.textContent = "Please enter your email address.";
    return;
  }

  greetingMsg.textContent = "Hello, " + (visitorName || "visitor") + "! Thanks for stopping by.";
  contactForm.reset();
});
