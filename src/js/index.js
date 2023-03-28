const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.querySelector(".btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

setaAvancar.addEventListener("click",  () => {
  console.log("cartaoAtual", cartaoAtual);
  console.log("cartoes", cartoes.length - 1);

  if (cartaoAtual === cartoes.length - 1) return;

  console.log("blá");

  cartaoAtual++;
  console.log(cartoes[cartaoAtual].classList.add("selecionado"));

  const cartaoEscolhido = document.querySelector(".selecionado");
  cartaoEscolhido.classList.remove("selecionado");
  console.log(cartaoEscolhido);
});

setaVoltar.addEventListener("click", () => {


  if(cartaoAtual === 0 ) return;  
  const cartaoEscolhido = document.querySelector(".selecionado");
  cartaoEscolhido.classList.remove("selecionado");
  console.log(cartaoEscolhido);

  cartaoAtual--;
  console.log(cartaoAtual);
  cartoes[cartaoAtual].classList.add("selecionado");
});
