//Я понятия не имею зачем я этот код писал, без него всё так же работает.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const inputText = document.getElementById('inputText');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        const userInput = formData.get('user_input');

        fetch('/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(responseText => {
            appendLaTeXFormula(responseText);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function appendLaTeXFormula(formula) {
        if (inputText.value.trim() !== '') {
            inputText.value += '\n';
        }
        inputText.value += formula;
    }
});