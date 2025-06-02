// Load components into the main page
window.addEventListener("DOMContentLoaded", () => {
    loadComponent("components/header.html", "#header");
    loadComponent("components/footer.html", "#footer");
    loadComponent("components/hero.html", "#hero")
    loadComponent("components/reviews.html", "#reviews")
    loadComponent("components/quote.html", "#quote")
    loadComponent("components/about.html", "#about")
  });
  
  function loadComponent(path, selector) {
    fetch(path)
      .then((res) => res.text())
      .then((html) => {
        document.querySelector(selector).innerHTML = html;
      })
      .catch((err) => console.error(`Failed to load ${path}:`, err));
  }