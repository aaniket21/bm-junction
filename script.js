import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('opacity-100');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
document.getElementById('year').textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
            }
        });
    }, { threshold: 0.2 });

    hiddenElements.forEach(el => observer.observe(el));
});

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".hero-button", { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.7 });

    gsap.utils.toArray(".fade-in").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });
});
