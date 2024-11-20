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

const track = document.querySelector('.carousel-track');
const photos = Array.from(track.children);
const prevButton = document.querySelector('.nav.prev');
const nextButton = document.querySelector('.nav.next');

let currentIndex = 0;

function updateCarousel() {
  photos.forEach((photo, index) => {
    const offset = index - currentIndex;

    photo.classList.remove('active');
    photo.style.transform = `translateX(${offset * 100}%) scale(${Math.max(0.8, 1 - Math.abs(offset) * 0.2)})`;
    photo.style.opacity = Math.max(0.5, 1 - Math.abs(offset) * 0.5);

    if (offset === 0) {
      photo.classList.add('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  updateCarousel();
});

// Initialize carousel
updateCarousel();
