// JavaScript to handle the scrolling behavior
window.addEventListener('scroll', function() {
    const menuBar = document.getElementById('menuBar');
    const initialContentHeight = document.querySelector('.initial-content').offsetHeight;
    
    // If we've scrolled past the initial content, make the menu sticky at the top
    if (window.scrollY >= initialContentHeight) {
      menuBar.classList.add('sticky');
      menuBar.style.bottom = 'auto';  // Remove the bottom positioning once it becomes sticky
    } else {
      menuBar.classList.remove('sticky');
      menuBar.style.bottom = '0';  // Keep it at the bottom initially
    }
  });
  