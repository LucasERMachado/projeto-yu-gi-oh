/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/


/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento 
  */

const botaoAvancar = document.getElementById("btn-avancar");

const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;


cartoes.forEach(cartao =>{
  cartao.addEventListener("click", function(){
    const cartaVirada = cartao.querySelector(".carta-virada");

    // Virar a carta - Para isso usamos o toggle. Se o elemento tiver a classe, ele vai remover. Se o elemento não tiver, ele adiciona.
    cartao.classList.toggle("virar");
    //  Mostrar o fundo da carta virada
    cartaVirada.classList.toggle("mostrar-fundo-carta");

    //Aqui está escondendo a descrição da carta para quando virar a carta, ela ocupar corretamente o espaço
    const descricao = cartao.querySelector(".descricao");
    descricao.classList.toggle("esconder");

  });
});


/*
OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
*/

const botaoVoltar = document.getElementById("btn-voltar");

//- passo 2 - dar um jeito de identificar o clique do usuário na seta Avançar

botaoAvancar.addEventListener("click", function () {

    if (cartaoAtual === cartoes.length - 1) return;

    //- passo 4 - buscar o cartão que esta selecionado e esconder
    EsconderCartaoSelecionado();

    //passo 3 - fazer aparecer o próximo cartão da lista 
    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

/*
OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/


//- passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
botaoVoltar.addEventListener("click", function () {

    if (cartaoAtual === 0) return;

    // - passo 4 - buscar o cartão que esta selecionado e esconder
    EsconderCartaoSelecionado();

    //- passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function EsconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

