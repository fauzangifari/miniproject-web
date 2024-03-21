gsap.from("header", {
    duration: 4,
    y: -50,
    opacity: 0,
    ease: "power4.inOut",
  });
  
  gsap.from(".profile-card", {
    duration: 4,
    x: -50,
    opacity: 0,
    ease: "power4.inOut",
  });
  
  gsap.from(".about", {
    duration: 4,
    x: 50,
    opacity: 0,
    ease: "power4.inOut",
  });