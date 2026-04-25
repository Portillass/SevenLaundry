const downloadButton = document.querySelector('.btn-primary');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navBackdrop = document.querySelector('.nav-backdrop');
const navLinks = document.querySelectorAll('.main-nav .nav-link');

if (navToggle && mainNav) {
    const openMobileNav = () => {
        mainNav.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
        if (navBackdrop) {
            navBackdrop.hidden = false;
            navBackdrop.classList.add('is-open');
        }
    };

    const closeMobileNav = () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        if (navBackdrop) {
            navBackdrop.classList.remove('is-open');
            navBackdrop.hidden = true;
        }
    };

    navToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.contains('is-open');
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', () => {
            closeMobileNav();
        });
    });

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMobileNav);
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
            closeMobileNav();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    });
}

if (downloadButton) {
    downloadButton.addEventListener('click', () => {
        downloadButton.setAttribute('aria-pressed', 'true');
        window.setTimeout(() => {
            downloadButton.removeAttribute('aria-pressed');
        }, 250);
    });
}