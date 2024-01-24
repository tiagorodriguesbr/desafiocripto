function processText() {
    var inputText = document.getElementById('inputText').value.toLowerCase();
    var operation = document.getElementById('operation').value;
    var resultContainer = document.querySelector('.result-container');
    var modifiedTextContainer = document.getElementById('modifiedText');

    if (operation === 'encrypt') {
        var encryptedText = encryptText(inputText);
        modifiedTextContainer.textContent = 'Texto Modificado: ' + encryptedText;
        resultContainer.style.display = 'flex';
    } else if (operation === 'decrypt') {
        var decryptedText = decryptText(inputText);
        modifiedTextContainer.textContent = 'Texto Modificado: ' + decryptedText;
        resultContainer.style.display = 'flex';
    }
}

function encryptText(text) {
    return text.split('').map(function (char) {
        switch (char) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return char;
        }
    }).join('');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    var modifiedText = document.getElementById('modifiedText').textContent;
    var textarea = document.createElement('textarea');
    textarea.value = modifiedText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado para a área de transferência!');
}
