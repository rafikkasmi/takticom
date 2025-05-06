/**
 * Carousel functionality for TAKTICOM website
 */

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  
  const items = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  
  let currentIndex = 0;
  let interval;
  const autoplayDelay = 5000; // 5 seconds between slides
  
  // Initialize carousel
  function initCarousel() {
    // Set first slide as active
    items[0].classList.add('active');
    if (indicators.length > 0) {
      indicators[0].classList.add('active');
    }
    
    // Start autoplay
    startAutoplay();
  }
  
  // Go to specific slide
  function goToSlide(index) {
    // Remove active class from all slides and indicators
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    currentIndex = index;
    items[currentIndex].classList.add('active');
    if (indicators.length > 0) {
      indicators[currentIndex].classList.add('active');
    }
    
    // Restart autoplay
    startAutoplay();
  }
  
  // Go to next slide
  function nextSlide() {
    let newIndex = currentIndex + 1;
    if (newIndex >= items.length) {
      newIndex = 0;
    }
    goToSlide(newIndex);
  }
  
  // Go to previous slide
  function prevSlide() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = items.length - 1;
    }
    goToSlide(newIndex);
  }
  
  // Start autoplay
  function startAutoplay() {
    // Clear any existing interval
    clearInterval(interval);
    
    // Set new interval
    interval = setInterval(nextSlide, autoplayDelay);
  }
  
  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      prevSlide();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      nextSlide();
    });
  }
  
  // Add click event to indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      goToSlide(index);
    });
  });
  
  // Pause autoplay on hover
  carousel.addEventListener('mouseenter', function() {
    clearInterval(interval);
  });
  
  // Resume autoplay on mouse leave
  carousel.addEventListener('mouseleave', function() {
    startAutoplay();
  });
  
  // Initialize carousel
  initCarousel();
});
