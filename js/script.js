// Função para carregar o conteúdo de um arquivo HTML
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o HTML:', error);
        });
}

// Carregar os templates
loadHTML('header', IDBIndex('login'));
loadHTML('footer', '');



