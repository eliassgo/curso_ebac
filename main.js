
    
    $('#t-estudantil').on('submit', function(e) {//ao clicar no botão de submeter do form       
        e.preventDefault() //Impedir de ser recarregado a página ao clicar em submeter 
        
        const nomeTarefa = $('#nome-testudantil').val(); //Cria uma constante chamada nomeTarefa, esta constante recebe o que foi escrito na div de id nome-terefa
        const novaTarefa = $('<li> </li>');//Cria uma constante novaTarefa esta constante a ordenação da lista, li

        $(novaTarefa).text(nomeTarefa);//Primeiro, o texto da constante nometerefa é escrio dentro da constante novaTarefa
        $(novaTarefa).appendTo('#lista-estudantil');//Constante novaTarefa que tem dentro a constante nomeTarefa é colocado dentro do formuláro ul que está na div formularios
        $(`#nome-testudantil`).val('')//o input nome-tarefa é limpo e able for receber novas tarefas

        $(document).ready(function(){ //Quando o documento estiver pronto
            $('#lista-estudantil li').click(function(){ //dublo click na ul de id lista-estudantil, aplicar a função
                $(this).toggleClass('risco');//toggle alterna entre ausência e presença da classe riscado, adiciona caso não tenha, retira caso tenha
            });
        });
    });

    $('#t-profissional').on('submit', function(e) {
        e.preventDefault() 
        
        const nomeTarefaT = $('#nome-tprofissional').val(); 
        const novaTarefaT = $('<li> </li>');

        $(novaTarefaT).text(nomeTarefaT);
        $(novaTarefaT).appendTo('#lista-profissional'); //inserindo um conteúdo HTML dentro de outra tag
        $(`#nome-tprofissional`).val('')

        $(document).ready(function() {
            $('#lista-profissional li').click(function() {
            $(this).toggleClass('risco');
            });
        });

    });
    
    $('#t-financeiro').on('submit', function(e) {
        e.preventDefault() 
        
        const nomeTarefaF = $('#nome-financeiro').val(); 
        const novaTarefaF = $('<li> </li>');

        $(novaTarefaF).text(nomeTarefaF);
        $(novaTarefaF).appendTo('#lista-financeiro');
        $(`#nome-financeiro`).val('')

        $(document).ready(function() {
            $('#lista-financeiro li').click(function() {
            $(this).toggleClass('risco');
            });
        });

    });
    

    
    $('#t-pessoal').on('submit', function(e) {
        e.preventDefault() 
        
        const nomeTarefaP = $('#nome-pessoal').val(); 
        const novaTarefaP = $('<li> </li>');

        $(novaTarefaP).text(nomeTarefaP);
        $(novaTarefaP).appendTo('#lista-pessoal');
        $(`#nome-pessoal`).val('')

        
    });
    
    