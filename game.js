

let listadeCartas = [`carta1`, `carta2`, `carta3`, `carta4`, `carta5`, `carta6`, `carta7`];

let cartasSelecionadas = [];

let answerPlayer;

let item;

let ul;



function selecionarCartas() {


  let answerPlayer = Number(prompt("Bem vindo ao jogo! Selecione de 4 a 14 cartas"));


  for (contador = 0; answerPlayer > contador; contador++) {
    while (answerPlayer < 4) {
      answerPlayer = Number(prompt("Bem vindo ao jogo! Selecione de 4 a 14 cartas"))
    }
    while (answerPlayer > 14) {
      answerPlayer = Number(prompt("Bem vindo ao jogo! Selecione de 4 a 14 cartas"))
    }
    while (answerPlayer % 2 !== 0)
      answerPlayer = Number(prompt("Bem vindo ao jogo! Selecione de 4 a 14 cartas"))

  }


  for (contador = 0; (answerPlayer / 2) > contador; contador++) {
    let teste = listadeCartas;
    cartasSelecionadas.push(listadeCartas[contador])
    cartasSelecionadas.push(listadeCartas[contador])

  }

  cartasSelecionadas.sort(embaralhar)

  cartasNaTela();
}



function embaralhar() {

  return Math.random() - 0.5;

}



function cartasNaTela() {

  ul = document.querySelector(`ul`)




  for (let contador = 0; contador < cartasSelecionadas.length; contador++) {

    item =
      `<ul>
      
      <div id="${cartasSelecionadas[contador]}" onclick="virar (this)" class="front-face face">
        
        <img src="./Imagens/back.png">
      </div>

    <div id="${cartasSelecionadas[contador]}" onclick="virar (this)" class="back-face face" >
        
        <img src="./Imagens/${cartasSelecionadas[contador]}.gif">
       
      </div>


      </ul>`



    ul.innerHTML += item;

  }
}



let primeiraCarta = "";
let segundaCarta = "";

let contadorAcerto = 0;
let contadorErro = 0;

function verify() {

  let primeira = primeiraCarta.id
  let segunda = segundaCarta.id

  if (primeira === segunda) {
    primeiraCarta = "";
    segundaCarta = "";
    contadorAcerto++
  }

  else {
    setTimeout(() => {
      primeiraCarta.parentNode.classList.remove("virada")
      segundaCarta.parentNode.classList.remove("virada")
      primeiraCarta = ""
      segundaCarta = ""
      contadorErro++
    }, 1000)

  }

  if (contadorAcerto === answerPlayer / 2) {


  }
  conseguiu()
  alert("oi")

}

function conseguiu() {

}


function virar(clicou) {

  if (clicou.parentNode.classList.contains("virada")) {
    return
  }

  if (primeiraCarta === "") {
    clicou.parentNode.classList.add("virada")
    primeiraCarta = clicou;

  }
  else if (segundaCarta === "") {
    clicou.parentNode.classList.add("virada")
    segundaCarta = clicou;
    verify()
  }
}


selecionarCartas();