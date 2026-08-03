/* ==========================================================================
   EchoPlex — Complete JavaScript
   Interactive: Particles, cursor, typed headlines, scroll animations, counters
   ========================================================================== */

(function() {
    'use strict';

    // ============================================================
    // 1. CUSTOM CURSOR
    // ============================================================

    const cursorDot = document.getElementById('cursorDot');
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0,
        mouseY = 0;
    let dotX = 0,
        dotY = 0;
    let glowX = 0,
        glowY = 0;

    if (cursorDot && cursorGlow && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth follow animation
        function animateCursor() {
            dotX += (mouseX - dotX) * 0.15;
            dotY += (mouseY - dotY) * 0.15;
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;

            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
            cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Hover states for interactive elements
        const hoverElements = document.querySelectorAll('a, button, .btn, .feature-card, .about-card, .team-card, .ecp-card, .promo-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hover');
                cursorGlow.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hover');
                cursorGlow.classList.remove('hover');
            });
        });
    }

    // ============================================================
    // 2. PARTICLE SYSTEM
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

        // Create particles
        const particleCount = Math.min(80, Math.floor((w * h) / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Connection lines
        function drawConnections() {
            const maxDist = 120;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.15;
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

        // Mouse interaction for particles
        let mouseParticleX = -1000,
            mouseParticleY = -1000;

        document.addEventListener('mousemove', (e) => {
            mouseParticleX = e.clientX;
            mouseParticleY = e.clientY;
        });

        function animateParticles() {
            ctx.clearRect(0, 0, w, h);

            // Update and draw particles
            particles.forEach(p => {
                // Mouse repulsion
                const dx = p.x - mouseParticleX;
                const dy = p.y - mouseParticleY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150 && dist > 0) {
                    const force = (150 - dist) / 150 * 0.3;
                    p.x += (dx / dist) * force;
                    p.y += (dy / dist) * force;
                }

                p.update();
                p.draw();
            });

            drawConnections();
            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ============================================================
    // 3. SCROLL PROGRESS BAR
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
    // 4. NAVIGATION — Scroll Shadow
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
    // 5. NAVIGATION — Mobile Hamburger
    // ============================================================

    const hamburger = document.getElementById('hamburgerMenu');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
            hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close nav on link click (mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
                mainNav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // ============================================================
    // 6. NAVIGATION — Dropdown
    // ============================================================

    const dropdown = document.getElementById('navDropdown');
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');

    if (dropdown && dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle('is-open');
            dropdownToggle.setAttribute('aria-expanded', isOpen);
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('is-open');
                dropdownToggle.setAttribute('aria-expanded', 'false');
            }
        });

        dropdown.querySelectorAll('.nav-dropdown-menu a').forEach(link => {
            link.addEventListener('click', () => {
                dropdown.classList.remove('is-open');
                dropdownToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============================================================
    // 7. ACTIVE NAV LINK ON SCROLL
    // ============================================================

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a:not(.nav-generator-button):not(.nav-game-button)');

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
    // 8. TYPED HEADLINE
    // ============================================================

    const typedElement = document.getElementById('heroTyped');
    if (typedElement) {
        const phrases = [
            'a unified ecosystem',
            'A play-and-earn gaming hub',
            'a unified community',
            'a decentralized economic future',
            'your hub for creation and digital finance'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 70;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];

            if (!isDeleting) {
                // Typing
                typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 2000);
                    return;
                }
            } else {
                // Deleting
                typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(typeEffect, 400);
                    return;
                }
            }

            const speed = isDeleting ? 40 : 80 + Math.random() * 40;
            setTimeout(typeEffect, speed);
        }

        // Start after a delay
        setTimeout(typeEffect, 1000);
    }

    // ============================================================
    // 9. SCROLL REVEAL
    // ============================================================

    const revealElements = document.querySelectorAll('.reveal');
    const revealDifferent = document.querySelectorAll('.reveal-different');
    const revealRotate = document.querySelectorAll('.reveal-rotate');

    if ('IntersectionObserver' in window) {
        // Standard reveal
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

        // Different direction reveal
        const differentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    differentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealDifferent.forEach(el => differentObserver.observe(el));

        // Rotate reveal
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
        // Fallback: show everything
        revealElements.forEach(el => el.classList.add('is-visible'));
        revealDifferent.forEach(el => el.classList.add('is-visible'));
        revealRotate.forEach(el => el.classList.add('is-visible'));
    }

    // ============================================================
    // 10. STAT COUNTERS
    // ============================================================

    const statNumbers = document.querySelectorAll('.hero-stat-number');

    function animateStatCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'), 10);
            const duration = 2000;
            const startTime = performance.now();

            if (stat.dataset.animated === 'true') return;
            stat.dataset.animated = 'true';

            // Generate random target for demo (replace with real data)
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

    // Trigger counters when hero is visible
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
    // 11. SMOOTH SCROLL FOR NAV LINKS
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
    // 12. WAITLIST FORM
    // ============================================================

    const waitlistForm = document.getElementById('waitlistForm');
    const waitlistEmail = document.getElementById('waitlistEmail');
    const waitlistNote = document.getElementById('waitlistNote');

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (waitlistEmail && waitlistEmail.value) {
                const email = waitlistEmail.value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailPattern.test(email)) {
                    waitlistEmail.disabled = true;
                    const submitBtn = waitlistForm.querySelector('.btn');
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = '✓ You\'re In!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    submitBtn.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.2)';

                    if (waitlistNote) {
                        waitlistNote.textContent = '🎉 Welcome to EchoPlex! You\'ll hear from us soon.';
                        waitlistNote.style.color = '#34d399';
                    }

                    setTimeout(() => {
                        waitlistEmail.disabled = false;
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                        submitBtn.style.boxShadow = '';
                        if (waitlistNote) {
                            waitlistNote.textContent = 'No spam. No data selling. Just updates.';
                            waitlistNote.style.color = '';
                        }
                        waitlistEmail.value = '';
                    }, 3000);
                } else {
                    if (waitlistNote) {
                        waitlistNote.textContent = 'Please enter a valid email address.';
                        waitlistNote.style.color = '#f43f5e';
                        waitlistEmail.style.borderColor = '#f43f5e';

                        setTimeout(() => {
                            waitlistNote.textContent = 'No spam. No data selling. Just updates.';
                            waitlistNote.style.color = '';
                            waitlistEmail.style.borderColor = '';
                        }, 2500);
                    }
                }
            }
        });
    }

    // ============================================================
    // 13. WALLET ADDRESS COPY
    // ============================================================

    const walletElements = document.querySelectorAll('.footer-wallet');

    walletElements.forEach(el => {
        el.addEventListener('click', function() {
            const address = this.getAttribute('data-address');
            if (!address) return;

            const originalText = this.textContent;

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(address)
                    .then(() => {
                        this.textContent = '✓ Copied!';
                        this.style.color = '#34d399';
                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.color = '';
                        }, 2000);
                    })
                    .catch(() => fallbackCopy(address, this, originalText));
            } else {
                fallbackCopy(address, this, originalText);
            }
        });
    });

    function fallbackCopy(text, element, originalText) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            element.textContent = '✓ Copied!';
            element.style.color = '#34d399';
            setTimeout(() => {
                element.textContent = originalText;
                element.style.color = '';
            }, 2000);
        } catch (err) {
            // Fallback
            alert('Address: ' + text);
        }
        document.body.removeChild(textarea);
    }

    // ============================================================
    // 14. DYNAMIC YEAR
    // ============================================================

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ============================================================
    // 15. KEYBOARD SHORTCUT — Toggle Nav with ESC
    // ============================================================

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // ============================================================
    // 16. CONSOLE EASTER EGG
    // ============================================================

    console.log('%c✦ EchoPlex ✦', 'font-size: 28px; font-weight: 900; color: #a78bfa;');
    console.log('%cRedefining Creative Freedom in Web3.', 'font-size: 14px; color: #b8b0d8;');
    console.log('%c🌌 Decentralized • Creative • Gaming • Community', 'font-size: 12px; color: #6f6390;');
    console.log('%c👀 Welcome. Build the future.', 'font-size: 12px; color: #22d3ee;');

    console.log('   ███████╗ ██████╗██╗  ██╗ ██████╗ ██████╗ ██╗     ███████╗██╗  ██╗\n' +
                '   ██╔════╝██╔════╝██║  ██║██╔═══██╗██╔══██╗██║     ██╔════╝╚██╗██╔╝\n' +
                '   █████╗  ██║     ███████║██║   ██║██████╔╝██║     █████╗   ╚███╔╝ \n' +
                '   ██╔══╝  ██║     ██╔══██║██║   ██║██╔══██╗██║     ██╔══╝   ██╔██╗ \n' +
                '   ███████╗╚██████╗██║  ██║╚██████╔╝██║  ██║███████╗███████╗██╔╝ ██╗\n' +
                '   ╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝\n');

    console.log('%c🚀 EchoPlex is live. Explore, create, and build.', 'font-size: 14px; color: #a78bfa;');

})();