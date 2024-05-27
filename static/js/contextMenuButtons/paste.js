document.getElementById('paste').addEventListener('click', async function() {
    const inputText = document.getElementById('inputText');
    inputText.focus();

    try {
      const text = await navigator.clipboard.readText();
      const start = inputText.selectionStart;
      const end = inputText.selectionEnd;
      inputText.setRangeText(text, start, end, 'end');
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }

    document.getElementById('context-menu').style.display = 'none';
  });