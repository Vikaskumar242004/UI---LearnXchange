// script.js

// Example: Add a simple hover effect to the feature cards
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// You can add more JavaScript functionality as needed.

// Example: Simple "Join Now" button alert
const joinNowButton = document.querySelector('.join-now');
joinNowButton.addEventListener('click', () => {
    alert('Redirecting to registration page...');
    // Replace with actual redirection logic
});

// Example: Simple "Learn More" button alert
const learnMoreButton = document.querySelector('.learn-more');
learnMoreButton.addEventListener('click', () => {
    alert('Redirecting to Learn More page...');
    // Replace with actual redirection logic
});