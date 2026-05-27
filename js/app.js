let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogos R&R';



function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botão = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    if (botão.textContent === 'Alugar') {
        botão.textContent = "Devolver";
    }
    else {
        botão.textContent = 'alugar';
    }

}
