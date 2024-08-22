// Função JavaScript para mudar a cor do conteúdo
function mudarCor(id) {
    // Remove a classe 'active' de qualquer outro elemento
    document.querySelectorAll('.conteudo').forEach(function(el) {
        el.classList.remove('active');
        
    });
    

// Adiciona a classe 'active' ao conteúdo desejado
document.getElementById(id).classList.add('active');

}


function scrollToContent(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
    });
    mudarCor(id); // Chama sua função de mudança de cor
}