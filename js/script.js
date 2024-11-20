function toggleMenu() {
    const menu = document.getElementById('menuList');
    const button = document.querySelector('.menuButton');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const menuBar = document.querySelector('.menu-bar');

    // Toggle aria-expanded attribute for accessibility
    button.setAttribute('aria-expanded', !isExpanded);
    // Toggle visibility of the menu
    menu.classList.toggle('hidden');
    // Set aria-hidden to reflect the menu state
    menu.setAttribute('aria-hidden', isExpanded);

    // Adjust the position of the menu based on its location in the viewport
    adjustMenuPosition(menuBar, menu);
}

function adjustMenuPosition(menuBar, menu) {
    const menuBarRect = menuBar.getBoundingClientRect();
    const menuHeight = menu.offsetHeight;

    // Check if the menu is near the top or bottom of the screen
    if (menuBarRect.top < menuHeight) {
        // Expand the menu upwards
        menu.classList.add('downwards');
        menu.classList.remove('upwards');
    } else if (menuBarRect.bottom + menuHeight > window.innerHeight) {
        // Expand the menu downwards
        menu.classList.add('upwards');
        menu.classList.remove('downwards');
    } else {
        // Default to downward expansion
        menu.classList.remove('downwards', 'upwards');
    }
}
