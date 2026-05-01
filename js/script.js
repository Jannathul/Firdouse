document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // MOBILE MENU TOGGLE
  // =========================
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu-items');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Auto close on click
    document.querySelectorAll('.mobile-menu-items a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

  // =========================
  // SMOOTH SCROLL
  // =========================
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // =========================
  // IMAGE SLIDER (FUN VERSION)
  // =========================
  let index = 0;
  const slides = document.getElementById("slides");

  if (slides) {
    const totalSlides = slides.children.length;

    // Create dots
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots");
    slides.parentElement.appendChild(dotsContainer);

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        index = i;
        showSlide();
      });

      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function showSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;

      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    window.moveSlide = function(step) {
      index += step;

      if (index >= totalSlides) index = 0;
      if (index < 0) index = totalSlides - 1;

      showSlide();
    };

    // Auto slide (slower + smooth)
    let autoSlide = setInterval(() => {
      index = (index + 1) % totalSlides;
      showSlide();
    }, 4000);

    // Pause on hover
    slides.addEventListener("mouseenter", () => clearInterval(autoSlide));
    slides.addEventListener("mouseleave", () => {
      autoSlide = setInterval(() => {
        index = (index + 1) % totalSlides;
        showSlide();
      }, 4000);
    });
  }

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
