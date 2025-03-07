const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

document.getElementById('year').textContent = new Date().getFullYear();
const btnContainers = document.querySelectorAll(".btn-container");

        btnContainers.forEach(container => {
            container.addEventListener("mousemove", (e) => {
                const { left, top, width, height } = container.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) / 4;
                const y = (e.clientY - top - height / 2) / 4;
                gsap.to(container.children[0], { x, y, rotation: x / 2, duration: 0.3 });
            });

            container.addEventListener("mouseleave", () => {
                gsap.to(container.children[0], { x: 0, y: 0, rotation: 0, duration: 0.3 });
            });
        });

        gsap.to(".btn-flip", { boxShadow: "0 0 15px rgba(168, 230, 207, 0.7)", repeat: -1, yoyo: true, duration: 1.5 });