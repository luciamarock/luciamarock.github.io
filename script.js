// Toggle main menu on mobile
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Toggle submenus on mobile
document.querySelectorAll('nav ul li > a').forEach(link => {
    link.addEventListener('click', e => {
        const parentLi = link.parentElement;
        const submenu = parentLi.querySelector('ul');

        if (submenu) {
            e.preventDefault(); // Prevent default link
            parentLi.classList.toggle('active');
        }
    });
});

// Close submenus when clicking outside
document.addEventListener('click', e => {
    const nav = document.querySelector('nav');
    if (!nav.contains(e.target)) {
        document.querySelectorAll('nav ul li.active').forEach(li => li.classList.remove('active'));
        menu.classList.remove('open');
    }
});

