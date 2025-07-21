// --- Cookiebot Custom Banner JS ---
var cookieBannerSliderPos = 0;
var cookiebannerElement = document.getElementById("cookiebanner"); // Get the element once

function showCookieBanner() {
    if (!cookiebannerElement) return; // Exit if banner not found

    var dialogHeight = parseInt(cookiebannerElement.offsetHeight);
    cookiebannerElement.style.bottom = (cookieBannerSliderPos - dialogHeight) + "px";
    cookieBannerSliderPos += 4; // Adjust speed if needed
    if (cookieBannerSliderPos < dialogHeight) {
        setTimeout(function () {
            showCookieBanner();
        }, 1);
    } else {
        cookieBannerSliderPos = 0;
        cookiebannerElement.style.bottom = "0px";
        // Ensure display is block or flex if it was initially hidden by other means
        cookiebannerElement.style.display = 'block'; // Or 'flex' if CSS sets it to flex
    }
}

function hideCookieBanner() {
    if (cookiebannerElement) {
        cookiebannerElement.style.display = "none";
    }
}

// Call showCookieBanner() when the page loads, but only if consent hasn't been given
document.addEventListener('DOMContentLoaded', function() {
    // Cookiebot automatically handles showing/hiding based on consent status
    // and its primary script. Your showCookieBanner/hideCookieBanner
    // functions are likely called by Cookiebot's main script.
    // If you were NOT using Cookiebot's main script, you'd call showCookieBanner() here.
    // For now, ensure Cookiebot's main script (from Step 1) is working.
});

// --- End Cookiebot Custom Banner JS ---


// ... your existing JavaScript (scroll to top, wallet copy) starts here ...
document.addEventListener('DOMContentLoaded', function() {
    // ... existing wallet copy code ...
});

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

// Crypto Wallet Copy to Clipboard Functionality
document.addEventListener('DOMContentLoaded', function() {
    const walletAddresses = document.querySelectorAll('.wallet-address');

    walletAddresses.forEach(addressSpan => {
        addressSpan.addEventListener('click', function() {
            const addressToCopy = this.getAttribute('data-address');

            // Create a temporary textarea element
            const textarea = document.createElement('textarea');
            textarea.value = addressToCopy;
            textarea.style.position = 'fixed'; // Prevents scrolling to bottom
            textarea.style.opacity = 0; // Make it invisible
            document.body.appendChild(textarea);

            // Select and copy the text
            textarea.select();
            document.execCommand('copy');

            // Remove the temporary textarea
            document.body.removeChild(textarea);

            // Provide visual feedback to the user
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            this.classList.add('copied');

            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('copied');
            }, 1500); // Revert text after 1.5 seconds
        });
    });
});
