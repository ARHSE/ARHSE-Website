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

// Default language
let currentLanguage = "en";

// Function to render Navbar with links based on available text
function renderNavbar() {
  const navbarContainer = document.getElementById("navbarLinks");

  // Load content dynamically
  navbarContainer.innerHTML = `
        ${
          aboutContent[currentLanguage].navbarText
            ? `<a class="nav-link" href="#about">${aboutContent[currentLanguage].navbarText}</a>`
            : ""
        }
        ${
          projectsContent[currentLanguage].navbarText
            ? `<a class="nav-link" href="#projects">${projectsContent[currentLanguage].navbarText}</a>`
            : ""
        }
        ${
          testimonialsContent[currentLanguage].navbarText &&
          testimonialsContent[currentLanguage].testimonials.length > 0
            ? `<a class="nav-link" href="#testimonials">${testimonialsContent[currentLanguage].navbarText}</a>`
            : ""
        }
    `;
}

// Function to render the About section
function renderAbout() {
  const aboutContainer = document.getElementById("aboutContainer");
  aboutContainer.innerHTML = aboutContent[currentLanguage].content;
}

// Function to render Projects
function renderProjects() {
  const projectContainer = document.getElementById("projectContainer");
  const projectData = projectsContent[currentLanguage].projects;
  projectContainer.innerHTML = projectData
    .map(
      (project) => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Function to render Testimonials and hide if empty
function renderTestimonials() {
  const testimonialsSection = document.getElementById("testimonials");
  const testimonialContainer = document.getElementById("testimonialContainer");
  const testimonialData = testimonialsContent[currentLanguage].testimonials;

  if (testimonialData.length === 0) {
    testimonialsSection.style.display = "none";
  } else {
    testimonialsSection.style.display = "block";
    testimonialContainer.innerHTML = testimonialData
      .map(
        (testimonial) => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">${testimonial.name}</h5>
                        <p class="card-text">"${testimonial.feedback}"</p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }
}

// Function to switch language and update the website content
function switchLanguage() {
  currentLanguage = currentLanguage === "en" ? "de" : "en";
  document.getElementById("languageToggle").src =
    currentLanguage === "en" ? "images/gb.svg" : "images/de.svg";
  renderNavbar();
  renderAbout();
  renderProjects();
  renderTestimonials();
}

// Initial Render on Page Load
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderAbout();
  renderProjects();
  renderTestimonials();

  // Attach event listener for language toggle
  document
    .getElementById("languageToggle")
    .addEventListener("click", switchLanguage);
});
