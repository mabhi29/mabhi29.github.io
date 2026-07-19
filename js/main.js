/**
 * Abhishek Mule - Portfolio Unified Core Script
 * Combines Main Layout Mechanics & Typing Animation Engine
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. PAGE LOADER INITIALIZATION
    // ==========================================
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        window.addEventListener('load', () => {
            pageLoader.classList.add('fade-out');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 600); // Matches CSS fade-out transition duration
        });
    }

    // ==========================================
    // 2. SCROLL PROGRESS BAR & STICKY HEADER
    // ==========================================
    const progressBar = document.getElementById('progressBar');
    const siteHeader = document.getElementById('siteHeader');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Progress Bar Calculation
        if (progressBar && docHeight > 0) {
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${scrollPercent}%`;
        }

        // Sticky Header State Toggle
        if (siteHeader) {
            if (scrollTop > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }

        // Back to Top Button Visibility
        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    // ==========================================
    // 3. MOUSE GLOW EFFECT TRACKER
    // ==========================================
    const mouseGlow = document.getElementById('mouseGlow');
    if (mouseGlow) {
        window.addEventListener('mousemove', (e) => {
            mouseGlow.style.left = `${e.clientX}px`;
            mouseGlow.style.top = `${e.clientY}px`;
        });
    }

    // ==========================================
    // 4. HAMBURGER NAVIGATION (MOBILE DRAWER)
    // ==========================================
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Auto-closes mobile menu layout when an anchor link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // ==========================================
    // 5. HERO TYPING ANIMATION ENGINE
    // ==========================================
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const structuralRoles = [
            "Electronics & Telecommunication Engineer.",
            "Embedded Systems Developer.",
            "IoT Architecture Architect.",
            "VLSI Enthusiast."
        ];
        
        let currentStringIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function handleTypecycle() {
            const explicitString = structuralRoles[currentStringIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = explicitString.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = explicitString.substring(0, charIndex + 1);
                charIndex++;
            }

            let calculatedSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === explicitString.length) {
                calculatedSpeed = 2000; // Delay when sentence is fully typed
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentStringIndex = (currentStringIndex + 1) % structuralRoles.length;
                calculatedSpeed = 400; // Brief pause before starting the next word
            }

            setTimeout(handleTypecycle, calculatedSpeed);
        }

        // Start the typing loop after a short initial delay
        setTimeout(handleTypecycle, 1000);
    }

    // ==========================================
    // 6. SCROLL ANIMATION (REVEAL ON SCROLL)
    // ==========================================
    const targetRevealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    if ('IntersectionObserver' in window) {
        const revealConfig = {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); 
                    observer.unobserve(entry.target); // Stops observing once animated
                }
            });
        }, revealConfig);

        targetRevealElements.forEach(element => revealObserver.observe(element));
    } else {
        // Fallback for older browsers that don't support IntersectionObserver
        targetRevealElements.forEach(element => element.classList.add('active'));
    }

    // ==========================================
    // 7. BUTTON RIPPLE DYNAMICS
    // ==========================================
    const rippleElements = document.querySelectorAll('.ripple');
    rippleElements.forEach(button => {
        button.addEventListener('click', function(e) {
            const boundedRect = this.getBoundingClientRect();
            const posX = e.clientX - boundedRect.left;
            const posY = e.clientY - boundedRect.top;

            const rippleSpan = document.createElement('span');
            rippleSpan.classList.add('ripple-wave');
            rippleSpan.style.left = `${posX}px`;
            rippleSpan.style.top = `${posY}px`;

            this.appendChild(rippleSpan);

            setTimeout(() => {
                rippleSpan.remove();
            }, 600); // Cleans up ripple element after animation ends
        });
    });

    // ==========================================
    // 8. CASE STUDY OVERLAY SYSTEM (MODALS)
    // ==========================================
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTriggerButtons = document.querySelectorAll('[data-modal-open]');
    const allModalWindows = document.querySelectorAll('.modal-window');

    if (modalOverlay) {
        modalTriggerButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetModalId = button.getAttribute('data-modal-open');
                const targetModalWindow = document.getElementById(targetModalId);

                if (targetModalWindow) {
                    allModalWindows.forEach(window => window.style.display = 'none'); // Clear active stacks
                    
                    modalOverlay.classList.add('active');
                    targetModalWindow.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Lock background scrolling
                }
            });
        });

        // Close on backdrop click
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModalWindow();
            }
        });
        
        // Close on 'Escape' key press
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModalWindow();
            }
        });
    }

    // Globally scoped window function to target inline HTML attributes (e.g., onclick="closeModalWindow()")
    window.closeModalWindow = function() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable background scrolling
            setTimeout(() => {
                allModalWindows.forEach(window => window.style.display = 'none');
            }, 300); 
        }
    };

    // ==========================================
    // 9. ACTIVE NAVIGATION SCROLL SPY
    // ==========================================
    const modularSections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 150; // Offset calculation for sticky header tracking

        modularSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            menuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

});