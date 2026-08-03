/* ==========================================================================
   EchoPlex Games — Complete JavaScript
   ========================================================================== */

(function() {
    'use strict';

    // ============================================================
    // 1. SCROLL PROGRESS BAR
    // ============================================================

    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = progress + '%';
        }, { passive: true });
    }

    // ============================================================
    // 2. NAVIGATION — Scroll Shadow
    // ============================================================

    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 20) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ============================================================
    // 3. NAVIGATION — Mobile Hamburger
    // ============================================================

    const hamburger = document.getElementById('hamburgerMenu');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
            hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // ============================================================
    // 4. ACTIVE NAV LINK ON SCROLL
    // ============================================================

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        let current = '';
        const headerHeight = mainHeader ? mainHeader.offsetHeight : 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 60;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav-link');
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                if (targetId === current) {
                    link.classList.add('active-nav-link');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // ============================================================
    // 5. SCROLL REVEAL
    // ============================================================

    const revealElements = document.querySelectorAll('.reveal');
    const revealRotate = document.querySelectorAll('.reveal-rotate');

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

        const rotateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    rotateObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealRotate.forEach(el => rotateObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
        revealRotate.forEach(el => el.classList.add('is-visible'));
    }

    // ============================================================
    // 6. STAT COUNTERS
    // ============================================================

    const statNumbers = document.querySelectorAll('.hero-stat-number');

    function animateStatCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'), 10);
            const duration = 2000;
            const startTime = performance.now();

            if (stat.dataset.animated === 'true') return;
            stat.dataset.animated = 'true';

            const actualTarget = target > 0 ? target : Math.floor(Math.random() * 9000) + 1000;

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * actualTarget);

                stat.textContent = current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = actualTarget.toLocaleString();
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) heroObserver.observe(heroSection);

    // ============================================================
    // 7. SMOOTH SCROLL
    // ============================================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = mainHeader ? mainHeader.offsetHeight : 76;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ============================================================
    // 8. DYNAMIC YEAR
    // ============================================================

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ============================================================
    // 9. PARTICLE SYSTEM (Shared from main site)
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
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
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

        const particleCount = Math.min(60, Math.floor((w * h) / 20000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function drawConnections() {
            const maxDist = 120;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            drawConnections();
            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ============================================================
    // 10. CONSOLE EASTER EGG
    // ============================================================

    console.log('%c🎮 EchoPlex Games', 'font-size: 24px; font-weight: 900; color: #67e8f9;');
    console.log('%cPlay. Earn. Unlock. Repeat.', 'font-size: 14px; color: #b8b0d8;');
    console.log('%c🎯 Mind Mania • 🧠 Word Scramble • 🎲 Roll & Flip', 'font-size: 12px; color: #6f6390;');
    console.log('%c🔥 Start playing and earn ECP today!', 'font-size: 12px; color: #a78bfa;');

})();

// ============================================================
// CAROUSEL — Coming Soon Cards
// ============================================================

(function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalCards = 6;
    let autoSlideInterval;

    function goToSlide(index) {
        if (index < 0) index = totalCards - 1;
        if (index >= totalCards) index = 0;
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    // Auto-slide every 4 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2500);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Pause on hover
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        container.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }

    startAutoSlide();

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (container) {
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(currentIndex - 1);
                }
                resetAutoSlide();
            }
        });
    }

})();