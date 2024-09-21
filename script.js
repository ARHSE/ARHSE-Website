// Simple form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Thank you for your message!");
      // In a real-world application, you would send the form data to your server here.
    } else {
      alert("Please fill in all fields.");
    }
  });

// Select the dark mode toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Check for saved dark mode preference in localStorage
const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "enabled") {
  enableDarkMode();
}

// Event listener for the dark mode toggle button
darkModeToggle.addEventListener("click", () => {
  document.body.classList.contains("dark-mode")
    ? disableDarkMode()
    : enableDarkMode();
});

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  darkModeToggle.textContent = "Light Mode";
  localStorage.setItem("darkMode", "enabled");
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  darkModeToggle.textContent = "Dark Mode";
  localStorage.setItem("darkMode", "disabled");
}
