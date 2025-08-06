function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }


  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product_card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      productCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });


  ScrollReveal().reveal('.scroll-reveal', {
    duration: 1000,         // Animation duration: 1s
    delay: 500,            // Delay before animation starts: 1s
    distance: '150px',      // Increased distance: farther movement
    origin: 'bottom',       // Animate from bottom
    easing: 'ease-in-out',
    interval: 100,          // Delay between items (only applies to multiple)
    reset: false     // Do not reset animation on scroll back
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  const revealElements = document.querySelectorAll('.service_item, .title_container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });

 document.addEventListener('DOMContentLoaded', function () {
  // citiesSwiper
  const swiper = new Swiper('.citiesSwiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      500: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 25 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
      1400: { slidesPerView: 5, spaceBetween: 30 }
    }
  });

  // testimonialSwiper
  const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });

  // trustedSwiper
  var trustedSwiper = new Swiper('.trustedswiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      480: { slidesPerView: 3 },
      768: { slidesPerView: 5 },
      1024: { slidesPerView: 6 }
    }
  });

  // AOS
  AOS.init({ duration: 1000, once: true });

  // Contact Form Submit
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        successMsg.style.display = "block";
        form.reset();
      } else {
        alert("There was a problem submitting the form.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });

  // Clickable Map
  const mapContainer = document.getElementById('mapContainer');
  mapContainer.addEventListener('click', () => {
    const mapUrl = "https://www.google.com/maps/place/Ibadan,+Nigeria";
    window.open(mapUrl, '_blank');
  });
});


// Auto-insert current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  // Scroll to section with class
  document.querySelectorAll("a[data-target]").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll to top button
  document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });