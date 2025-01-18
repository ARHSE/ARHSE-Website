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
          servicesContent[currentLanguage].navbarText
            ? `<a class="nav-link" href="#projects">${servicesContent[currentLanguage].navbarText}</a>`
            : ""
        }
        ${
          projectsContent[currentLanguage].navbarText
            ? `<a class="nav-link" href="#projects">${projectsContent[currentLanguage].navbarText}</a>`
            : ""
        }        
    `;
}

function renderHero() {
  const heroHeader = document.getElementById("heroHeader");
  const heroText = document.getElementById("heroText");

  heroHeader.innerHTML = heroContent[currentLanguage].header;
  heroText.innerHTML = heroContent[currentLanguage].content;
}

// Function to render the About section
function renderAbout() {
  const aboutTitle = document.getElementById("aboutTitle");
  const aboutContainer = document.getElementById("aboutContainer");
  aboutTitle.innerHTML = aboutContent[currentLanguage].sectionText;
  aboutContainer.innerHTML = aboutContent[currentLanguage].content;
}

// Function to render Services
function renderServices() {
  const servicesTitle = document.getElementById("servicesTitle");
  const servicesContainer = document.getElementById("servicesContainer");
  const servicesData = servicesContent[currentLanguage].services;
  servicesTitle.innerHTML = servicesContent[currentLanguage].sectionText;
  servicesContainer.innerHTML = servicesData
    .map(
      (services) => `
      <div class="accordion-item">
                    <h2 class="accordion-header" id="${services.title.replace(/\s/g,"")}-heading">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#${services.title.replace(/\s/g,"")}-text" aria-expanded="false" aria-controls="${services.title.replace(/\s/g,"")}-text">
                            <strong>${services.title}</strong>
                          </button>
                    </h2>
                    <div id="${services.title.replace(/\s/g,"")}-text" class="accordion-collapse collapse" aria-labelledby="${services.title.replace(/\s/g,"")}-heading"
                        data-bs-parent="#servicesContainer">
                        <div class="accordion-body">
                            ${services.description}
                        </div>
                    </div>
    `
    )
    .join("");
}

// Function to render Projects
function renderProjects() {
  const projectTitle = document.getElementById("projectsTitle");
  const projectContainer = document.getElementById("projectContainer");
  const projectData = projectsContent[currentLanguage].projects;
  projectTitle.innerHTML = projectsContent[currentLanguage].sectionText;
  projectContainer.innerHTML = projectData
    .map(
      (project) => `
      <div class="accordion-item">
                    <h2 class="accordion-header" id="${project.title.replace(/\s/g,"")}-heading">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#${project.title.replace(/\s/g,"")}-text" aria-expanded="false" aria-controls="${project.title.replace(/\s/g,"")}-text">
                            <strong>${project.title}</strong>
                          </button>
                    </h2>
                    <div id="${project.title.replace(/\s/g,"")}-text" class="accordion-collapse collapse" aria-labelledby="${project.title.replace(/\s/g,"")}-heading"
                        data-bs-parent="#projectContainer">
                        <div class="accordion-body">
                            ${project.description}
                        </div>
                    </div>
    `
    )
    .join("");
}

// Function to render Testimonials and hide if empty
function renderTestimonials() {
  const testimonialsTitle = document.getElementById("testimonialsTitle");
  const testimonialsSection = document.getElementById("testimonials");
  const testimonialContainer = document.getElementById("testimonialContainer");
  const testimonialData = testimonialsContent[currentLanguage].testimonials;

  if (testimonialData.length === 0) {
    testimonialsSection.style.display = "none";
  } else {
    testimonialsSection.style.display = "block";
    testimonialsTitle.innerHTML =
      testimonialsContent[currentLanguage].sectionText;
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

function renderContact() {
  const contactSection = document.getElementById("contact");
  const contactHeader = document.getElementById("contactHeader");

  const nameLabel = document.getElementById("nameLabel");
  const nameInput = document.getElementById("name");

  const emailLabel = document.getElementById("emailLabel");
  const emailInput = document.getElementById("email");

  const messageLabel = document.getElementById("messageLabel");
  const messageInput = document.getElementById("message");

  const sendButton = document.getElementById("sendButton");

  const contactData = contactContent[currentLanguage];

  if (contactData.length === 0) {
    contactSection.style.display = "none";
  } else {
    contactSection.style.display = "true";
    contactHeader.innerHTML = contactData.sectionText;
    nameLabel.innerHTML = contactData.name;
    nameInput.placeholder = contactData.namePlaceholder;

    emailLabel.innerHTML = contactData.email;
    emailInput.placeholder = contactData.emailPlaceholder;

    messageLabel.innerHTML = contactData.message;
    messageInput.placeholder = contactData.messagePlaceholder;

    sendButton.innerHTML = contactData.sendButton;
  }
}

function renderTexts() {
  renderNavbar();
  renderHero();
  renderAbout();
  renderServices();
  renderProjects();
  // renderTestimonials();
  renderContact();
}

// Function to switch language and update the website content
function switchLanguage() {
  currentLanguage = currentLanguage === "en" ? "de" : "en";
  document.getElementById("languageToggle").src =
    currentLanguage === "en" ? "images/gb.svg" : "images/de.svg";
  renderTexts();
}

// Initial Render on Page Load
document.addEventListener("DOMContentLoaded", () => {
  renderTexts();

  // Attach event listener for language toggle
  document
    .getElementById("languageToggle")
    .addEventListener("click", switchLanguage);
});
