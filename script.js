/**
 * Bonix Solutions - Main JavaScript File
 *
 * 1. Mobile Navigation Toggle
 * 2. Sticky Header on Scroll
 * 3. Active Navigation Link Highlighting on Scroll
 * 4. Fade-in Animations on Scroll
 */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    // ======== 1. MOBILE NAVIGATION TOGGLE ========
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            // Toggle hamburger icon to 'X' icon
            navToggle.innerHTML = navLinks.classList.contains("open")
                ? '<i class="bx bx-x"></i>'
                : '<i class="bx bx-menu"></i>';
        });
    }
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.innerHTML = '<i class="bx bx-menu"></i>';
            }
        });
    });

    // ======== 2. STICKY HEADER ========
    const stickyHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
    window.addEventListener("scroll", stickyHeader);
    
    
    // ======== 3. ACTIVE NAV LINK HIGHLIGHTING ========
    const sections = document.querySelectorAll("section[id]");
    const navListItems = document.querySelectorAll(".nav-links a");

    const highlightActiveLink = () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if section is in view (with an offset)
            if (window.scrollY >= sectionTop - (sectionHeight / 3)) {
                currentSection = section.getAttribute("id");
            }
        });

        navListItems.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${currentSection}`) {
                a.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", highlightActiveLink);


    // ======== 4. FADE-IN ANIMATIONS ON SCROLL ========
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Stop observing after it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});