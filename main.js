const form = document.getElementById('form-numbers');
const numberTwo = document.getElementById('number-two');
let numbersValido = false;

function verificaNumbers(number1, number2) {

    if (number1 < number2) {
        return resultadoNum =  true;
    } else {
        return resultadoNum = false;
    }
}

form.addEventListener ('submit', function(e) {

    e.preventDefault();

    const numberOne = document.getElementById('number-one');
    const mensagemSucesso = `O segundo número (${numberTwo.value}) é maior que o primeiro número (${numberOne.value}), por isso o formulário foi submetido!`;

    numbersValido = verificaNumbers(numberOne.value, numberTwo.value);
    if (numbersValido) {

        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numberOne.value = '';
        numberTwo.value = '';

    } 

    if (!numbersValido) {
        numberTwo.classList.add('error');
        document.querySelector('.error-mesage').style.display = 'block';
    }else{
        numberTwo.classList.remove('error');
        document.querySelector('.error-mesage').style.display = 'none';
    }
})
