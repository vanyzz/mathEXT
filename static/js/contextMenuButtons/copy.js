document.getElementById('copy').addEventListener('click', function() {
    const inputText = document.getElementById('inputText');
    inputText.select();
    document.execCommand('copy');
    document.getElementById('context-menu').style.display = 'none';
  });