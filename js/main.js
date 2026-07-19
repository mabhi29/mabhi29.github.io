/**
 * ==========================================================================
 * ABHISHEK MULE PERSONAL PORTFOLIO ARCHITECTURE
 * CORE CONTROLLER CORESTACKS
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dismiss Application Loader Framework
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                pageLoader.classList.add('fade-out');
            }, 300); // Premium visual dwell time
        });
        // Fallback for asset delays
        setTimeout(() => {
            if (!pageLoader.classList.contains('fade-out')) {
                pageLoader.classList.add('fade-out');
            }
        }, 2000);
    }

    // 2. Mobile Nav Open/Close Interactions
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMobileMenu = () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    };

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // 3. Header Scrolled Tracking & Dynamic Progress Bars
    const siteHeader = document.getElementById('siteHeader');
    const progressBar = document.getElementById('progressBar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Progress Calculation
        if (documentHeight > 0) {
            const scrollPercentage = (scrollTop / documentHeight) * 100;
            if (progressBar) progressBar.style.width = `${scrollPercentage}%`;
        }

        // Header State Transformations
        if (siteHeader) {
            if (scrollTop > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }

        // Back To Top Display Transitions
        if (backToTop) {
            if (scrollTop > 600) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        }

        // Active Link Highlighting via Scroll Spy
        let currentSectionId = 'home';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollTop >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 4. Premium Mouse Tracking Interactive Glow Elements
    const mouseGlow = document.getElementById('mouseGlow');
    if (mouseGlow && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            mouseGlow.style.opacity = '1';
            mouseGlow.style.left = `${e.clientX}px`;
            mouseGlow.style.top = `${e.clientY}px`;
        });
        document.addEventListener('mouseleave', () => {
            mouseGlow.style.opacity = '0';
        });
    }

    // 5. Intersection Observer Configuration (Scroll Reveal Engine)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .zoom-in');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal animation only runs once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 6. Premium Button Action Ripple Micro-interactions
    const rippleButtons = document.querySelectorAll('.ripple');
    
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rippleCircle = document.createElement('span');
            rippleCircle.classList.add('ripple-effect');
            rippleCircle.style.left = `${x}px`;
            rippleCircle.style.top = `${y}px`;
            
            this.appendChild(rippleCircle);
            
            setTimeout(() => {
                rippleCircle.remove();
            }, 600);
        });
    });

    // 7. Micro-Parallax System for Hero Profiler Setup
    const heroImageWrapper = document.querySelector('.hero-image-wrapper');
    if (heroImageWrapper && window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            const axisX = (window.innerWidth / 2 - e.clientX) / 45;
            const axisY = (window.innerHeight / 2 - e.clientY) / 45;
            heroImageWrapper.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
        });
    }

    // ==========================================================================
    // ABHISHEK MULE INTERACTIVE CASE STUDY MODAL MANAGEMENT ENGINE
    // ==========================================================================
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseBtn = document.getElementById('modalClose');
    const triggerButtons = document.querySelectorAll('[data-modal-open]');

    // Function to activate target view context
    const openModalWindow = (targetId) => {
        if (modalOverlay) {
            modalOverlay.classList.add('modal-active');
            document.body.style.overflow = 'hidden'; // Halt main structural scroll loops
        }
    };

    // Function to safely tear down operational frame
    const closeModalWindow = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('modal-active');
            document.body.style.overflow = ''; // Restore structural scroll properties
        }
    };

    // Binding operations to registered DOM targets
    triggerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const TargetModal = btn.getAttribute('data-modal-open');
            openModalWindow(TargetModal);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModalWindow);
    }

    // Safety fallback execution: Close if developer clicks the abstract space outside
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModalWindow();
            }
        });
        
        // Connect system Escape key loops
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('modal-active')) {
                closeModalWindow();
            }
        });
    }

    // Global Interactive Image Gallery Switcher Sub-system
    window.updateTsalGallery = function(selectedSrc, thumbnailElement) {
        const mainDisplay = document.getElementById('tsalMainDisplay');
        if (!mainDisplay) return;

        // Apply quick slick opacity shift
        mainDisplay.style.opacity = '0.3';
        
        setTimeout(() => {
            mainDisplay.src = selectedSrc;
            mainDisplay.style.opacity = '1';
        }, 150);

        // Standardize class arrays across siblings
        const allThumbs = document.querySelectorAll('.thumb-img');
        allThumbs.forEach(thumb => thumb.classList.remove('active-thumb'));
        thumbnailElement.classList.add('active-thumb');
    };
    
});