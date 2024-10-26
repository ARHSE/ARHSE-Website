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

// Function to render project components with optional image and link
function renderProjects() {
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                ${
                  project.image
                    ? `<img src="${project.image}" class="card-img-top" alt="${project.title}">`
                    : ""
                }
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    ${
                      project.link
                        ? `<a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>`
                        : ""
                    }
                </div>
            </div>
        </div>
        `;
    projectContainer.innerHTML += projectCard;
  });
}

// Function to render testimonials with optional image
function renderTestimonials() {
  const testimonialContainer = document.getElementById("testimonialContainer");
  testimonialContainer.innerHTML = "";

  testimonials.forEach((testimonial) => {
    const testimonialCard = `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card text-center">
                ${
                  testimonial.image
                    ? `<img src="${testimonial.image}" class="card-img-top rounded-circle mx-auto mt-3" alt="${testimonial.name}" style="width: 100px; height: 100px;">`
                    : ""
                }
                <div class="card-body">
                    <h5 class="card-title">${testimonial.name}</h5>
                    <p class="card-text">"${testimonial.feedback}"</p>
                </div>
            </div>
        </div>
        `;
    testimonialContainer.innerHTML += testimonialCard;
  });
}

// Render projects and testimonials on page load
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTestimonials();
});
