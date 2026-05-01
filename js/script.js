document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // MOBILE MENU TOGGLE
  // =========================
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // =========================
  // IMAGE SLIDER
  // =========================
  let index = 0;
  const slides = document.getElementById("slides");

  if (slides) {
    const totalSlides = slides.children.length;

    function showSlide() {
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    window.moveSlide = function(step) {
      index += step;

      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;

      showSlide();
    };

    // Auto slide
    setInterval(() => {
      index = (index + 1) % totalSlides;
      showSlide();
    }, 3000);
  }

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
