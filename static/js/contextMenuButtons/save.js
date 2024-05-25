document.getElementById('save').addEventListener('click', function() {
    // Get the content of the textarea
    var content = document.getElementById('inputText').value;

    // Prompt the user for a filename
    var filename = prompt("Введите имя файла:", "inputText.txt");

    // If the user cancels the prompt, do nothing
    if (filename === null) {
        return;
    }

    // Ensure the filename ends with .txt
    if (!filename.endsWith('.txt')) {
        filename += '.txt';
    }

    // Create a Blob with the content
    var blob = new Blob([content], { type: 'text/plain' });

    // Create a link element
    var link = document.createElement('a');

    // Set the download attribute with the filename provided by the user
    link.download = filename;

    // Create a URL for the Blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});