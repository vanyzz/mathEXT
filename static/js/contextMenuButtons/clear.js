
document.getElementById('clear').addEventListener('click', function() {
  document.getElementById('inputText').value = '';
  document.getElementById('context-menu').style.display = 'none';
});


// Функция для открытия контекстного меню
function openContextMenu(event) {
  event.preventDefault();
  const contextMenu = document.getElementById('context-menu');
  contextMenu.style.display = 'block';
  contextMenu.style.left = `${event.pageX}px`;
  contextMenu.style.top = `${event.pageY}px`;
}

// Добавляем обработчик события для текстового поля
document.getElementById('inputText').addEventListener('contextmenu', openContextMenu);

// Обработчик события для кнопки "Clear"
document.getElementById('clear').addEventListener('click', function() {
  document.getElementById('inputText').value = '';
  document.getElementById('context-menu').style.display = 'none';
});

// Обработчик события для скрытия контекстного меню при клике вне его области
document.addEventListener('click', function(event) {
  const contextMenu = document.getElementById('context-menu');
  if (!contextMenu.contains(event.target)) {
    contextMenu.style.display = 'none';
  }
});

