/**
 * ==========================================================================
 * DYNAMIC TYPEWRITER ENGINE INTERFACE
 * ==========================================================================
 */

class PremiumTypewriter {
    constructor(elementSelector, stringsArray, options = {}) {
        this.element = document.querySelector(elementSelector);
        this.strings = stringsArray;
        this.typeSpeed = options.typeSpeed || 75;
        this.eraseSpeed = options.eraseSpeed || 40;
        this.delayBetween = options.delayBetween || 2000;
        
        this.stringIndex = 0;
        this.charIndex = 0;
        this.isErasing = false;
        
        if (this.element) {
            this.element.style.borderRight = '2px solid var(--accent-green)';
            this.element.style.paddingRight = '4px';
            this.executeLoop();
        }
    }

    executeLoop() {
        const currentFullString = this.strings[this.stringIndex];
        
        if (!this.isErasing) {
            this.element.textContent = currentFullString.substring(0, this.charIndex + 1);
            this.charIndex++;

            if (this.charIndex === currentFullString.length) {
                this.isErasing = true;
                setTimeout(() => this.executeLoop(), this.delayBetween);
            } else {
                setTimeout(() => this.executeLoop(), this.typeSpeed);
            }
        } else {
            this.element.textContent = currentFullString.substring(0, this.charIndex - 1);
            this.charIndex--;

            if (this.charIndex === 0) {
                this.isErasing = false;
                this.stringIndex = (this.stringIndex + 1) % this.strings.length;
                setTimeout(() => this.executeLoop(), 400);
            } else {
                setTimeout(() => this.executeLoop(), this.eraseSpeed);
            }
        }
    }
}

// Initializing the Typewriter Instance
document.addEventListener('DOMContentLoaded', () => {
    const targetRoles = [
        "Electronics & Telecommunication Engineer.",
        "Embedded Systems Enthusiast.",
        "IoT Developer.",
        "AI Learner."
    ];
    
    new PremiumTypewriter('#typewriter', targetRoles, {
        typeSpeed: 60,
        eraseSpeed: 30,
        delayBetween: 2200
    });
});