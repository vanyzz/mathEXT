

document.getElementById('myRoundButton').addEventListener('click', function() {
    var menu = document.getElementById('floatingMenu');
    menu.classList.toggle('active');
    this.classList.toggle('glowing'); // Добавляем или удаляем класс 'glowing'
});