document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('hamburgerMenu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.style.display = 'flex';
    } else {
      menu.classList.add('hidden');
      menu.style.display = 'none';
    }
  });
  
  document.addEventListener('click', function(event) {
    var menu = document.getElementById('hamburgerMenu');
    var hamburgerButton = document.getElementById('hamburger-menu');
    if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
      menu.classList.add('hidden');
      menu.style.display = 'none';
    }
  });