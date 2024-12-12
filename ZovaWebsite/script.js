
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar-custom");
        if (window.scrollY > 50) {
            navbar.classList.add("frosted-glass");
        } else {
            navbar.classList.remove("frosted-glass");
        }
    });
document.addEventListener('DOMContentLoaded', function() {
  const scribble = document.querySelector('.nectar-scribble');
  const footer = document.querySelector('.footer'); // Select the correct footer element

  let hasAnimated = false;

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        scribble.classList.add('animate');
        hasAnimated = true;
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection);
  observer.observe(footer);
});

function fadeInHero() {
    const heroContainer = document.querySelector('.hero-container');
    heroContainer.classList.add('fade-in');
  }
  
  // Call the function on page load
  window.addEventListener('load', fadeInHero);