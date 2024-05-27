document.getElementById('select-all').addEventListener('click', function() {
    const inputText = document.getElementById('inputText');
    inputText.select();
    document.getElementById('context-menu').style.display = 'none';
  });