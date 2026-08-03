/* ==========================================================================
   Prelaunch — Complete JavaScript
   ========================================================================== */

(function() {
    'use strict';

    // ============================================================
    // 1. DOM REFS
    // ============================================================

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const signupForm = document.getElementById('signupForm');
    const signupEmail = document.getElementById('signupEmail');
    const signupNote = document.getElementById('signupNote');

    const progressBar = document.getElementById('scrollProgress');

    // ============================================================
    // 2. COUNTDOWN — Set launch date (December 21, 2025)
    // ============================================================

    const launchDate = new Date('December 21, 2027 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-grid').innerHTML = `
                <div class="countdown-item" style="grid-column: 1 / -1;">
                    <span class="countdown-number" style="font-size: 2rem;">🚀 EchoPlex Has Launched!</span>
                </div>
            `;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // ============================================================
    // 3. SIGNUP FORM (Formspree)
    // ============================================================

    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = signupEmail.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email) {
                signupNote.textContent = 'Please enter your email address.';
                signupNote.style.color = '#f43f5e';
                return;
            }

            if (!emailPattern.test(email)) {
                signupNote.textContent = 'Please enter a valid email address.';
                signupNote.style.color = '#f43f5e';
                return;
            }

            // Show loading state
            const submitBtn = signupForm.querySelector('.btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '⏳ Submitting...';
            submitBtn.disabled = true;

            try {
                const response = await fetch('https://formspree.io/f/xnnzjwga', {
                    method: 'POST',
                    body: new FormData(signupForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    signupNote.textContent = '🎉 Thank you for subscribing! We\'ll keep you updated.';
                    signupNote.style.color = '#34d399';
                    signupEmail.value = '';
                } else {
                    const data = await response.json();
                    if (data && data.errors) {
                        signupNote.textContent = 'Error: ' + data.errors.map(e => e.message).join(', ');
                    } else {
                        signupNote.textContent = 'Oops! There was a problem. Please try again.';
                    }
                    signupNote.style.color = '#f43f5e';
                }
            } catch (error) {
                signupNote.textContent = 'Could not connect. Please try again later.';
                signupNote.style.color = '#f43f5e';
                console.error('Form submission error:', error);
            }

            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Reset note after 5 seconds
            setTimeout(() => {
                if (signupNote.textContent.includes('Thank you') || signupNote.textContent.includes('Error')) {
                    signupNote.textContent = 'No spam. No data selling. Just updates.';
                    signupNote.style.color = '';
                }
            }, 5000);
        });
    }

    // ============================================================
    // 4. SCROLL PROGRESS
    // ============================================================

    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
        });
    }

    // ============================================================
    // 5. SCROLL REVEAL
    // ============================================================

    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, index * 80);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    // ============================================================
    // 6. NAV — Scroll Shadow
    // ============================================================

    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 20) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }

    // ============================================================
    // 7. DYNAMIC YEAR
    // ============================================================

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ============================================================
    // 8. PARTICLE SYSTEM
    // ============================================================

    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let w, h;

        function resizeCanvas() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.4 + 0.05;
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.01 + Math.random() * 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulse += this.pulseSpeed;
                if (this.x < 0 || this.x > w) this.speedX *= -1;
                if (this.y < 0 || this.y > h) this.speedY *= -1;
                this.currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(167, 139, 250, ${this.currentOpacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 50; i++) particles.push(new Particle());

        function animateParticles() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ============================================================
    // 9. CONSOLE EASTER EGG
    // ============================================================

    console.log('%c🚀 EchoPlex — Coming Soon', 'font-size: 22px; font-weight: 700; color: #67e8f9;');
    console.log('%cRedefining Creative Freedom in Web3.', 'font-size: 14px; color: #b8b0d8;');
    console.log('%c📅 Launch: December 21, 2025', 'font-size: 12px; color: #6f6390;');
    console.log('%c🌐 Join the waitlist at echoplex.xyz', 'font-size: 12px; color: #a78bfa;');

})();