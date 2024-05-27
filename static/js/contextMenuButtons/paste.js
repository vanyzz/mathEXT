document.getElementById('paste').addEventListener('click', async function() {
  const inputText = document.getElementById('inputText');
  if (!inputText) {
      console.error('Element with ID "inputText" not found.');
      return;
  }
  inputText.focus();

  try {
      const text = await navigator.clipboard.readText();
      const start = inputText.selectionStart;
      const end = inputText.selectionEnd;
      inputText.setRangeText(text, start, end, 'end');
  } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
  }

  const contextMenu = document.getElementById('context-menu');
  if (contextMenu) {
      contextMenu.style.display = 'none';
  } else {
      console.error('Element with ID "context-menu" not found.');
  }
});