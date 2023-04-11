$(document).ready(function(){

    $('form').on('submit', function(e) {//ao clicar no botão de submeter do form       
        e.preventDefault() //Impedir de ser recarregado a página ao clicar em submeter 
        
        const nomeTarefa = $('#nome-tarefa').val(); //Cria uma constante chamada nomeTarefa, esta constante recebe o que foi escrito na div de id nome-terefa
        const novaTarefa = $('<li> </li>');//Cria uma constante novaTarefa esta constante a ordenação da lista, li
    
        $(novaTarefa).text(nomeTarefa);//Primeiro, o texto da constante nometerefa é escrio dentro da constante novaTarefa
        $(novaTarefa).appendTo('#lista-tarefas');//Constante novaTarefa que tem dentro a constante nomeTarefa é colocado dentro do formuláro ul que está na div formularios
        $(`#nome-tarefa`).val('')//o input nome-tarefa é limpo e able for receber novas tarefas
    
            $('#lista-tarefas li').click(function(){ //click na ul de id lista-estudantil, aplicar a função
                $(this).toggleClass('risco');//toggle alterna entre ausência e presença da classe riscado, adiciona caso não tenha, retira caso tenha
            });
    });
})
    