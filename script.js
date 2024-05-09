// JavaScript for modal functionality

// Function to open a modal
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
};

// Function to close a modal
const closeModal = (modal) => {
    if (modal) {
        modal.style.display = 'none';
    }
};

// Event handler to open modals
document.querySelector('.projects-grid').addEventListener('click', (event) => {
    const btn = event.target.closest('.btn');
    if (btn) {
        event.preventDefault(); // Prevent default anchor link behavior
        const modalId = btn.getAttribute('data-modal');
        openModal(modalId);
    }
});

// Add event listener for closing modals when the close button is clicked
document.addEventListener('click', (event) => {
    const closeBtn = event.target.closest('.close');
    if (closeBtn) {
        const modal = closeBtn.closest('.modal');
        closeModal(modal);
    }
});

// Add event listener to close modals when clicking outside of the modal content
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Separate event listener and handlers for Project 4

// Get the modal, button, and close button for Project 4
const modal4 = document.getElementById('project4-modal');
const btn4 = document.querySelector('a[data-modal="project4-modal"]');
const close4 = modal4.querySelector('.close');

// Event listener to open Project 4 modal
btn4.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    modal4.style.display = 'block';
});

// Event listener to close Project 4 modal
close4.addEventListener('click', () => {
    closeModal(modal4);
});
