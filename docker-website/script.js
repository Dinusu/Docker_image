const learnButton = document.getElementById("learnButton");
const message = document.getElementById("message");

learnButton.addEventListener("click", () => {
  message.textContent = "Great! Your Docker-powered website is running.";
});
