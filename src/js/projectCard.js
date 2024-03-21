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