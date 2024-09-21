// function toggleMenu() {
//     const menuLinks = document.querySelector('.menu-links');
//     menuLinks.style.display = (menuLinks.style.display === 'flex') ? 'none' : 'flex';
// }

function toggleMenu() {
    const menu = document.querySelector(".menu-links");  // Fix: use menu-links for mobile
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open"); // Toggle the menu-links visibility
    icon.classList.toggle("open"); // Toggle hamburger icon animation
}
