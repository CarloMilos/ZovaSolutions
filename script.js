
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

  // Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add animation when in viewport
document.addEventListener("scroll", () => {
  const supportSection = document.querySelector(".wrap-support");
  if (supportSection && isInViewport(supportSection)) {
    supportSection.classList.add("animate");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".wrap-support .col");

  const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              observer.unobserve(entry.target); // Stop observing once it's faded in
          }
      });
  }, observerOptions);

  elements.forEach(element => {
      fadeInOnScroll.observe(element);
  });
});



