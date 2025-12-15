// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
let currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    if (currentTheme === 'light') {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
}

// Project Filtering Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
                card.classList.remove('fade-out');
                card.classList.add('fade-in');
            } else {
                card.classList.remove('fade-in');
                card.classList.add('fade-out');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 500); // Match animation duration
            }
        });
    });
});

// Dynamic DOM Updates - Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Validation with Custom Error Messages
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// Real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        // Simulate form submission (in a real scenario, you'd send this to a server)
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        clearErrors();
    }
});

function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        showError(nameError, 'Please enter your name.');
        return false;
    } else if (name.length < 2) {
        showError(nameError, 'Name must be at least 2 characters long.');
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError(nameError, 'Name can only contain letters and spaces.');
        return false;
    } else {
        hideError(nameError);
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        showError(emailError, 'Please enter your email address.');
        return false;
    } else if (!emailRegex.test(email)) {
        showError(emailError, 'Please enter a valid email address.');
        return false;
    } else {
        hideError(emailError);
        return true;
    }
}

function validateMessage() {
    const message = messageInput.value.trim();
    if (message === '') {
        showError(messageError, 'Please enter your message.');
        return false;
    } else if (message.length < 10) {
        showError(messageError, 'Message must be at least 10 characters long.');
        return false;
    } else {
        hideError(messageError);
        return true;
    }
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(errorElement) {
    errorElement.style.display = 'none';
}

function clearErrors() {
    hideError(nameError);
    hideError(emailError);
    hideError(messageError);
}

// Social Media Buttons Functionality
const instagramBtn = document.getElementById('instagram-btn');
const facebookBtn = document.getElementById('facebook-btn');

instagramBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // In a real scenario, replace with actual Instagram URL
    window.open('https://www.instagram.com/queenie_carba', '_blank');
});

facebookBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // In a real scenario, replace with actual Facebook URL
    window.open('https://www.facebook.com/queenie.carba', '_blank');
});

// Dynamic Text Animation for Hero Section
const heroText = document.querySelector('.hero-content h2');
const originalText = heroText.textContent;
let isAnimating = false;

function animateText() {
    if (isAnimating) return;
    isAnimating = true;

    const words = originalText.split(' ');
    heroText.textContent = '';

    words.forEach((word, index) => {
        setTimeout(() => {
            heroText.textContent += word + ' ';
            if (index === words.length - 1) {
                isAnimating = false;
            }
        }, index * 200);
    });
}

// Trigger text animation on page load
window.addEventListener('load', () => {
    setTimeout(animateText, 500);
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Skills Animation on Scroll
const skillItems = document.querySelectorAll('.skill-category li');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const lis = entry.target.querySelectorAll('li');
            lis.forEach((li, index) => {
                setTimeout(() => {
                    li.style.opacity = '1';
                    li.style.transform = 'translateX(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillsObserver.observe(category);
    // Initial state for animation
    category.querySelectorAll('li').forEach(li => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-20px)';
        li.style.transition = 'all 0.5s ease';
    });
});

// Typing Effect for Tagline
const tagline = document.querySelector('.tagline');
const taglineText = tagline.textContent;
tagline.textContent = '';

function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Start typing effect after hero text animation
setTimeout(() => {
    typeWriter(taglineText, tagline, 80);
}, 2000);