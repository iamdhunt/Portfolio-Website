const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

const slider = document.querySelector(".projects__container");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Horizontal Scroll Logic

slider.addEventListener("click", (e) => {
  const rect = slider.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const width = rect.width;

  const scrollAmount = 650;

  const leftZone = width * 0.25;
  const rightZone = width * 0.75;

  if (x < leftZone) {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else if (x > rightZone) {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
});

slider.addEventListener("mousemove", (e) => {
  const rect = slider.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const width = rect.width;

  if (x < width * 0.25) {
    slider.style.cursor = "pointer"; // Left arrow
  } else if (x > width * 0.75) {
    slider.style.cursor = "pointer"; // Right arrow
  } else {
    slider.style.cursor = "default";
  }
});
