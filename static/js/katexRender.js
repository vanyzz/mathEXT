const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

inputText.addEventListener('input', function() {
    const text = inputText.value;
    outputText.innerHTML = text.replace(/\$(.*?)\$/g, function(match, p1) {
        return katex.renderToString(p1);
    });
});

renderMathInElement(outputText, {
    delimiters: [
    {left: "$$", right: "$$", display: true},
    {left: "$", right: "$", display: false}
    ]
});