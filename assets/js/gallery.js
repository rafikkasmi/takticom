// Gallery Expansion Animation
document.addEventListener('DOMContentLoaded', function() {
  const galleryList = document.getElementById('gallery-main-list');
  const expandButtons = document.querySelectorAll('.gallery-expand-btn');
  const backButtons = document.querySelectorAll('.gallery-back-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const extraItems = document.querySelectorAll('.gallery-extra-item');
  
  // Function to reorganize the gallery to show the active item with its extra cards
  function showExtraCards(category) {
    // Find the active item
    const activeItem = document.querySelector(`.gallery-item[data-category="${category}"]`);
    const extraCardsForCategory = document.querySelectorAll(`.gallery-extra-item[data-category="${category}"]`);
    
    // First make sure all extra cards are hidden
    extraItems.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('active');
      item.style.order = '';
    });
    
    // Get the original position of the clicked card
    const activeCardPos = Array.from(galleryItems).indexOf(activeItem);
    const rowPosition = activeCardPos % 4; // Position within the row (0, 1, 2, or 3)
    
    // Set the clicked item to the start of the row
    activeItem.style.order = rowPosition * -1;
    activeItem.classList.add('active');
    
    // Hide all other gallery items except the active one
    galleryItems.forEach(item => {
      if (item !== activeItem) {
        item.style.display = 'none';
      }
    });
    
    // Assign proper order to extra cards to appear after the clicked card
    extraCardsForCategory.forEach((card, index) => {
      card.style.display = 'block';
      card.style.order = (rowPosition * -1) + index + 1; // Position after the active card
      
      // Add animation with slight delay between cards
      setTimeout(() => {
        card.classList.add('active');
      }, 100 * (index + 1));
    });
  }
  
  // Function to restore the original gallery view
  function restoreGallery() {
    // Hide and reset all extra cards
    extraItems.forEach(card => {
      card.classList.remove('active');
      setTimeout(() => {
        card.style.display = 'none';
        card.style.order = '';
      }, 300);
    });
    
    // Reset and show all original gallery items
    galleryItems.forEach(item => {
      item.style.order = ''; // Reset the order
      item.classList.remove('active');
      setTimeout(() => {
        item.style.display = ''; // Show the item again
      }, 300);
    });
  }
  
  // Add click event listeners to expand buttons
  expandButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      showExtraCards(category);
    });
  });
  
  // Add click event listeners to back buttons
  backButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      restoreGallery();
    });
  });
  
  // Initially hide all extra cards
  extraItems.forEach(item => {
    item.style.display = 'none';
  });
});
