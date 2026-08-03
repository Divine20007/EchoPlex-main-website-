/* ==========================================================================
   Privacy — Complete JavaScript
   ========================================================================== */

(function() {
    'use strict';

    // ============================================================
    // 1. SCROLL PROGRESS
    // ============================================================

    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
        });
    }

    // ============================================================
    // 2. NAV — Scroll Shadow
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
    // 3. DYNAMIC YEAR
    // ============================================================

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ============================================================
    // 4. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = mainHeader ? mainHeader.offsetHeight : 64;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ============================================================
    // 5. PARTICLE SYSTEM
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

        for (let i = 0; i < 40; i++) particles.push(new Particle());

        function animateParticles() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ============================================================
    // 6. CONSOLE EASTER EGG
    // ============================================================

    console.log('%c🔒 EchoPlex — Privacy Policy', 'font-size: 20px; font-weight: 700; color: #67e8f9;');
    console.log('%cYour privacy matters to us.', 'font-size: 14px; color: #b8b0d8;');
    console.log('%c📧 Contact: echoplexhq@gmail.com', 'font-size: 12px; color: #6f6390;');

})();