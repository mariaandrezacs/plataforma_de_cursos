// Função JavaScript para mudar a cor do conteúdo
function changeColor(id) {
    // Remove a classe 'active' de qualquer outro elemento
    document.querySelectorAll('.content').forEach(function(el) {
        el.classList.remove('active');
        
    });
    

// Adiciona a classe 'active' ao conteúdo desejado
document.getElementById(id).classList.add('active');

}


function scrollToContent(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ 
        behavior: 'smooth',             // suavisa a rolagem da oagina
        block: 'start'             // Ajusta a posição do elemento na viewport
    });
    changeColor(id);            // Chama sua função de mudança de cor
}