let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    loader.style.display = "none";
  }, 5000);
});

gsap.to(".preloader", {
  duration: 1.5,
  autoAlpha: 0,
  delay: 2.5,
  onComplete: function () {
    document.getElementById("preloader").style.display = "none";
  },
});

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});
