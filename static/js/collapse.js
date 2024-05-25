document.getElementById('collapseButton').addEventListener('click', function() {
    var container = document.querySelector('.Container');
    var folderMenu = document.querySelector('.folderMenu');
    
    // Проверяем, содержит ли элемент класс 'collapsed'
    if (container.classList.contains('collapsed')) {
        container.classList.remove('collapsed');
        folderMenu.style.display = ''; // Возвращаем стандартный стиль отображения
    } else {
        container.classList.add('collapsed');
        folderMenu.style.display = 'none'; // Скрываем содержимое
    }
});