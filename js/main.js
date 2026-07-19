/**
 * ==========================================================================
 * ABHISHEK MULE PERSONAL PORTFOLIO ARCHITECTURE
 * CORE CONTROLLER & MODAL ENGINE
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Page Loader Handler
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                pageLoader.classList.add('fade-out');
            }, 300);
        });
        
        // Fallback for network/asset delay
        setTimeout(() => {
            if (!pageLoader.classList.contains('fade-out')) {
                pageLoader.classList.add('fade-out');
            }
        }, 2000);
    }

    // 2. Mobile Navigation System
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

    // 3. Scroll Tracker, Progress Bar & Scroll-Spy System
    const siteHeader = document.getElementById('siteHeader');
    const progressBar = document.getElementById('progressBar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Scroll Progress Bar calculation
        if (documentHeight > 0 && progressBar) {
            const scrollPercentage = (scrollTop / documentHeight) * 100;
            progressBar.style.width = `${scrollPercentage}%`;
        }

        // Header Transformation
        if (siteHeader) {
            if (scrollTop > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }

        // Back to Top Button Toggle
        if (backToTop) {
            if (scrollTop > 600) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        }

        // Section Scroll-Spy for Navigation Links
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

    // 4. Desktop Mouse Glow Tracker
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

    // 5. Scroll Reveal Animation Engine (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .zoom-in');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
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

    // 6. Interactive Ripple Effect for Buttons
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

    // 7. Hero Image Micro-Parallax
    const heroImageWrapper = document.querySelector('.hero-image-wrapper');
    if (heroImageWrapper && window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            const axisX = (window.innerWidth / 2 - e.clientX) / 45;
            const axisY = (window.innerHeight / 2 - e.clientY) / 45;
            heroImageWrapper.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
        });
    }

    // 8. Modal Management Engine
    const modalOverlay = document.getElementById('modalOverlay');
    const triggerButtons = document.querySelectorAll('[data-modal-open]');

    window.openModalWindow = (targetId) => {
        if (!modalOverlay) return;

        const activeModals = modalOverlay.querySelectorAll('.modal-window.active');
        activeModals.forEach(modal => modal.classList.remove('active'));

        const targetModal = document.getElementById(targetId);
        if (targetModal) {
            targetModal.classList.add('active');
            modalOverlay.classList.add('modal-active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModalWindow = () => {
        if (!modalOverlay) return;
        
        modalOverlay.classList.remove('modal-active');
        
        const allModals = modalOverlay.querySelectorAll('.modal-window');
        allModals.forEach(modal => modal.classList.remove('active'));
        
        document.body.style.overflow = '';
    };

    triggerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetModalId = btn.getAttribute('data-modal-open');
            window.openModalWindow(targetModalId);
        });
    });

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                window.closeModalWindow();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('modal-active')) {
                window.closeModalWindow();
            }
        });
    }

    // 9. Gallery Thumbnail Swapper
    window.updateModalGallery = function(displayId, thumbnailElement) {
        const mainDisplay = document.getElementById(displayId);
        if (!mainDisplay || !thumbnailElement) return;

        mainDisplay.style.opacity = '0.25';
        
        setTimeout(() => {
            mainDisplay.src = thumbnailElement.src;
            mainDisplay.alt = thumbnailElement.alt;
            mainDisplay.style.opacity = '1';
        }, 130);

        const parentGallery = thumbnailElement.parentElement;
        if (parentGallery) {
            const siblingThumbs = parentGallery.querySelectorAll('.thumb-img');
            siblingThumbs.forEach(thumb => thumb.classList.remove('active-thumb'));
        }
        
        thumbnailElement.classList.add('active-thumb');
    };
});