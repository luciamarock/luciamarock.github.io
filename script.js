// Toggle main menu on mobile
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul.menu');

toggleButton.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Toggle submenus on mobile
document.querySelectorAll('nav ul li').forEach(li => {
    li.addEventListener('click', e => {
        const submenu = li.querySelector('ul');
        if (submenu) {
            e.stopPropagation(); // Prevent parent menus from closing
            e.preventDefault();  // Prevent default navigation
            submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        }
    });
});

// Optional: Close all submenus when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('nav ul li ul').forEach(ul => ul.style.display = 'none');
});

