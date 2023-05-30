// Seleciona os elementos HTML
const textInput = document.getElementById('text-input');
const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
const messageContainer = document.getElementById('message-container');
const message = document.getElementById('message');
const noMessage = document.getElementById('no-message');
const copyButton = document.getElementById('copy-button');

// Função para codificar a mensagem
function encodeMessage() {
    const encodedMessage = btoa(textInput.value);
    message.textContent = encodedMessage;
    messageContainer.style.display = 'flex';
    noMessage.style.display = 'none';
}


function decodeMessage() {
    /*
    textInput.value = '';  
    */ 
    message.textContent = '';

    reset()    
}

function reset(){
    noMessage.style.display = 'block';
}


// Função para copiar a mensagem codificada
function copyMessage() {
    const encodedMessage = message.textContent;
    navigator.clipboard.writeText(encodedMessage).then(() => {
        alert('Mensagem copiada!');
    });
}

// Adiciona os event listeners aos botões
encodeButton.addEventListener('click', encodeMessage);
decodeButton.addEventListener('click', decodeMessage);
copyButton.addEventListener('click', copyMessage);