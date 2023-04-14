$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        errorClass: 'class-erros',
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            termos: {
                required: true
            }
        }, 
        messages: {
            name: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu email',
            telefone: 'Por favor, insira seu telefone', 
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos =  validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    
})