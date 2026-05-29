let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogos R&R';
let iconePagina = document.querySelector('title');
iconePagina.textContent = 'jogosR&R';



function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botão = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    if (botão.textContent === 'Alugar') {
        botão.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        botão.classList.add('dashboard__item__button--return');
    }
    else {
        botão.textContent = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
        botão.classList.remove('dashboard__item__button--return');
    }

}
