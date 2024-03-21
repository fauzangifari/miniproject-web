const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
});