$(Document).ready(function(){
    // Adiciona capacidade scrollspy para o body
    $('body').scrollspy({target: ".navbar", offset: 50});
    
    // Adiciona scroll suave em todos os links dentro da navbar
    $('#ganeshNavBar a, #coverLink, #doubleDown').on('click', function(event){
       // Garanta que o hash possua um valor antes de sobreescrever o compartamento padrao
        if(this.hash !== ""){
            // Previna o comportamento padrao do link
            event.preventDefault();
            
            // Salve o hash
            var hash = this.hash;
            
            // JQuery animate para adicionar a suavizacao do scroll
            // onde o numero 800 especifica o tempo em milisegundos
            // que demora para chegar no destino
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, "easeInQuad", function(){
                // Adiciona o hash '#' na URL quando o scroll terminar (comportamente padrao de click)
                window.location.hash = hash;
            })
        }
    });
});