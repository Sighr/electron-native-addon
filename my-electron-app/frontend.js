const ipcRenderer = require('electron').ipcRenderer;

const btn = document.getElementById('btn');
const resultContainer = document.getElementById('result');

ipcRenderer.on('result', (event, data) => resultContainer.innerText = data);

btn.addEventListener('click', () => {
    ipcRenderer.send('buttonClicked');
});