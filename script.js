// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling and active link
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
        
        // Smooth scroll
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu
        navbar.classList.remove('active');
    });
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Scroll reveal animation (optional enhancement)
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.about, .projects, .contact');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}