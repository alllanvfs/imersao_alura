function filtrarMaravilha() {
    // Pegando o valor do input
    var input = document.getElementById("maravilhaInput").value.toLowerCase();
    
    // Selecionando todas as maravilhas
    var maravilhas = document.getElementsByClassName("maravilha");
    
    // Iterando sobre as maravilhas para ocultar as que não foram selecionadas
    for (var i = 0; i < maravilhas.length; i++) {
        var maravilha = maravilhas[i];
        
        // Se o nome da maravilha no HTML for igual ao nome digitado
        if (maravilha.textContent.toLowerCase().includes(input)) {
            maravilha.classList.remove("oculto");
            maravilha.classList.add("centro");
        } else {
            maravilha.classList.add("oculto");
            maravilha.classList.remove("centro");
        }
    }
}