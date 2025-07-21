document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav .nav-links a');
    const navButtons = document.querySelectorAll('.main-nav .nav-buttons .btn');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Close nav when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Close nav when a button is clicked (if they are part of the nav)
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });


    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is not for the whitepaper or subscribe button
            if (!this.classList.contains('whitepaper-link') && !this.classList.contains('btn-secondary')) {
                e.preventDefault(); // Prevent default jump behavior

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const headerOffset = document.querySelector('.main-header').offsetHeight; // Get header height
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset; // Adjust for sticky header

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Active Nav Link on Scroll (Optional - more complex, but enhances UX) ---
    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('.main-header').offsetHeight;

    function activateNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav-link'); // Custom class for styling
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-nav-link');
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // Call on load to set initial active link
});
