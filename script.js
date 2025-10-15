// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    function initAOS() {
        const aosElements = document.querySelectorAll('[data-aos]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    
                    // Handle delay
                    const delay = entry.target.getAttribute('data-aos-delay');
                    if (delay) {
                        entry.target.style.transitionDelay = delay + 'ms';
                    }
                }
            });
        }, {
            threshold: 0.1
        });
        
        aosElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // Mobile menu toggle functionality
    function initMobileMenu() {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (mobileMenu && menuBtn) {
                const isClickInsideMenu = mobileMenu.contains(event.target);
                const isClickInsideButton = menuBtn.contains(event.target);
                
                if (!isClickInsideMenu && !isClickInsideButton && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    }
    
    // Form validation for contact form
    function initForms() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                const name = document.getElementById('name');
                const email = document.getElementById('email');
                const message = document.getElementById('message');
                
                if (!name.value || !email.value || !message.value) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                // Simple form submission feedback
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }
        
        // Newsletter form handling
        const newsletterForms = document.querySelectorAll('form');
        newsletterForms.forEach(form => {
            if (form.querySelector('input[type="email"]')) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const emailInput = this.querySelector('input[type="email"]');
                    if (!emailInput.value) {
                        alert('Thank you for you feedback❤️');
                        return;
                    }
                    
                    // Simple form submission feedback
                    alert('Thank you for subscribing to our newsletter!');
                    this.reset();
                });
            }
        });
    }
    
    // WhatsApp button functionality
    function initWhatsApp() {
        const whatsappButton = document.getElementById('whatsapp-button');
        if (whatsappButton) {
            whatsappButton.addEventListener('click', function() {
                alert('This would open WhatsApp to contact us. Phone: +25670782382594');
            });
        }
    }
    // feather-icons.js - Feather Icons replacement
document.addEventListener('DOMContentLoaded', function() {
    // Simple icon replacement system
    const featherIcons = document.querySelectorAll('[data-feather]');
    
    // Simple icon mapping to UTF-8 characters
    const iconMap = {
        'menu': '☰',
        'check-circle': '✓',
        'heart': '♥',
        'sun': '☀',
        'briefcase': '💼',
        'star': '★',
        'play': '▶',
        'target': '◎',
        'eye': '👁',
        'send': '✉',
        'facebook': 'f',
        'twitter': 't',
        'instagram': 'i'
    };
    
    featherIcons.forEach(icon => {
        const iconName = icon.getAttribute('data-feather');
        if (iconMap[iconName]) {
            icon.textContent = iconMap[iconName];
            icon.style.fontFamily = 'Arial, sans-serif';
            icon.style.fontWeight = 'bold';
            
            // Add specific styles for social icons
            if (['facebook', 'twitter', 'instagram'].includes(iconName)) {
                icon.style.display = 'inline-block';
                icon.style.width = '24px';
                icon.style.height = '24px';
                icon.style.lineHeight = '24px';
                icon.style.textAlign = 'center';
                icon.style.backgroundColor = '#4B5563';
                icon.style.borderRadius = '50%';
            }
        }
    });
});
    
    // Initialize all functionality
    initAOS();
    initMobileMenu();
    initForms();
    initWhatsApp();
});
// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show success message
            alert(data.message);
            form.reset();
        } else {
            // Show error message
            alert(data.message);
        }
    })
    .catch(error => {
        alert('Message Delivered📧');
        console.error('Error:', error);
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    });
});