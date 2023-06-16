document.addEventListener('DOMContentLoaded', function () {
    //Captando elementos do DOM
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const bioElement = document.querySelector('#bio');
    const locElement = document.querySelector('#location');

    fetch('https://api.github.com/users/eliassgo')
        .then(function (resposta) {
            //Verificar se a resposta.ok é false
            if (!resposta.ok) { // ok verifica se requisição foi bem sucedida com base no status da resposta
                throw new Error('Erro na requisição' + resposta.status);
            }
            return resposta.json();
        })
        .then(function (json) {
            // Manipular os dados recebidos 
            nameElement.innerHTML = json.name;
            usernameElement.innerHTML = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerHTML = json.public_repos;
            followersElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.href = json.html_url;
            bioElement.innerHTML = json.bio;
            locElement.innerHTML = json.location;
        })
        .catch(function (error) {
            // Tratar erros da requisição
            alert('Ocorreu um erro na requisição: ', error);
        })
})