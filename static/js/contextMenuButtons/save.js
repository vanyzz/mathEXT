document.getElementById('save').addEventListener('click', function() {
    var content = document.getElementById('inputText').value;

    var filename = prompt("Введите имя файла:", "inputText.txt");

    if (filename === null) {
        return;
    }

    if (!filename.endsWith('.txt')) {
        filename += '.txt';
    }

    var blob = new Blob([content], { type: 'text/plain' });

    var link = document.createElement('a');

    link.download = filename;

    link.href = window.URL.createObjectURL(blob);

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});