document.getElementById('cut').addEventListener('click', function() {
    const inputText = document.getElementById('inputText');
    inputText.select();
    document.execCommand('cut');
    document.getElementById('context-menu').style.display = 'none';
  });