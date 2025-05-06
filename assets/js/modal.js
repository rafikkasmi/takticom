/**
 * Modal functionality for TAKTICOM website
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all modal open buttons
  const modalOpenBtns = document.querySelectorAll('.modal-open-btn');
  
  // Get all modal close buttons
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
  
  // Get all modal containers
  const modalContainers = document.querySelectorAll('.modal-container');
  
  // Function to open modal
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  }
  
  // Function to close modal
  function closeModal() {
    modalContainers.forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Add click event to open buttons
  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      openModal(modalId);
    });
  });
  
  // Add click event to close buttons
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });
  
  // Close modal when clicking outside of modal content
  modalContainers.forEach(modal => {
    modal.addEventListener('click', function(e) {
      // Check if the click was on the modal container itself, not its children
      if (e.target === this) {
        closeModal();
      }
    });
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
