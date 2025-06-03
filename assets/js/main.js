// Load components into the main page
window.addEventListener("DOMContentLoaded", () => {
    loadComponent("components/header.html", "#header");
    loadComponent("components/footer.html", "#footer");
    loadComponent("components/hero.html", "#hero")
    loadComponent("components/reviews.html", "#reviews")
    loadComponent("components/quote.html", "#quote")
    loadComponent("components/about.html", "#about")
    loadComponent("components/gallery.html", "#gallery")
  });
  
  function loadComponent(path, selector) {
    fetch(path)
      .then((res) => res.text())
      .then((html) => {
        document.querySelector(selector).innerHTML = html;
      })
      .catch((err) => console.error(`Failed to load ${path}:`, err));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");
  
    galleryContainer.innerHTML = `
      <div class="gallery">
        <div class="slideshow-container">
          <div class="slide">
            <img src="../img/setup.jpg" alt="Image 10">
          </div>
          <div class="slide">
            <img src="../img/bramble.jpg" alt="Image 1">
          </div>
          <!-- Add all other slides here -->
          <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
          <a class="next" onclick="changeSlide(1)">&#10095;</a>
        </div>
      </div>
    `;
  
    // Then include the slideshow JS here or make sure it's globally available
    window.slideIndex = 0;
    window.slides = document.getElementsByClassName("slide");
  
    window.showSlide = function(index) {
      if (index >= window.slides.length) window.slideIndex = 0;
      else if (index < 0) window.slideIndex = window.slides.length - 1;
      else window.slideIndex = index;
  
      for (let i = 0; i < window.slides.length; i++) {
        window.slides[i].style.display = "none";
      }
  
      window.slides[window.slideIndex].style.display = "block";
    };
  
    window.changeSlide = function(n) {
      window.showSlide(window.slideIndex + n);
    };
  
    window.showSlide(window.slideIndex);
  });