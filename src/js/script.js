const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
});

window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    loader.style.display = "none";
  }, 5000);
});

let projects = [
  {
    title: "Website SMAIM",
    description:
      "The project was created with WordPress to streamline website development and cater to client preferences.",
    image: "src/img/projects/smaim.png",
    link: "https://www.smaim.sch.id/",
  },

  {
    title: "Website Rumah Kasih",
    description: "The development of this project was undertaken within the context of my coursework, employing PHP as the primary programming language.",
    image: "src/img/projects/rumakasih.png",
    link: "#",
  },
  {
    title: "School Music Video",
    description: "This music video was made specifically for SMA Negeri 1 Samarinda students, with every detail designed according to the concept that has been set.",
    image: "src/img/projects/smansa-mv.png",
    link: "https://youtu.be/giz-9W9BpiY?si=49IkOfG96ik-tp24",
  },
];

let projectContainer = document.querySelector(".project-container");

projects.forEach((project) => {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  let projectCardHeader = document.createElement("div");
  projectCardHeader.classList.add("project-card-header");

  let projectImage = document.createElement("img");
  projectImage.src = project.image;
  projectImage.alt = project.title;

  projectCardHeader.appendChild(projectImage);

  let projectCardBody = document.createElement("div");
  projectCardBody.classList.add("project-card-body");

  let projectTitle = document.createElement("h2");
  projectTitle.classList.add("project-card-title");
  projectTitle.textContent = project.title;

  let projectDescription = document.createElement("p");
  projectDescription.classList.add("project-card-description");
  projectDescription.textContent = project.description;

  let projectLink = document.createElement("a");
  projectLink.href = project.link;
  projectLink.textContent = "Preview";

  projectCardBody.appendChild(projectTitle);
  projectCardBody.appendChild(projectDescription);
  projectCardBody.appendChild(projectLink);

  projectCard.appendChild(projectCardHeader);
  projectCard.appendChild(projectCardBody);

  projectContainer.appendChild(projectCard);
});

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

gsap.to(".preloader", {
  duration: 1.5,
  autoAlpha: 0,
  delay: 2.5,
  onComplete: function () {
    document.getElementById("preloader").style.display = "none";
  },
});

gsap.from("header", {
  duration: 4.5,
  y: -50,
  opacity: 0,
  ease: "power4.inOut",
});

gsap.from(".profile-card", {
  duration: 4.5,
  x: -50,
  opacity: 0,
  ease: "power4.inOut",
});

gsap.from(".about", {
  duration: 4.5,
  x: 50,
  opacity: 0,
  ease: "power4.inOut",
});


