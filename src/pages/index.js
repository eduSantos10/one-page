import * as React from "react"
import "../styles/index.scss"
var p;
var textos = ["Bem vindo!", "O foco é desenvolvimento!", "Conhecimento gera conhecimento!", "Nunca é apenas um botão!", "Encontrou o que procura?"];
let logoHeader = 'logo';
let contentMenu = 'barra';
let line = 'line';



const IndexPage = () => {

  return (
    <section >
      <div className={'h_bg'}></div>
      <nav className={'nav'}>
        {/* logo */}
        <label className={logoHeader}>.Me</label>

        {/* acesso do menu */}
        <input id="menu-hamburguer" type="checkbox" />
        <label for="menu-hamburguer">
          <div className={"menu"}>
            <span className={"hamburguer"}></span>
          </div>
        </label>

        {/* itens do menu */}
        <div className={contentMenu}> </div>
        <ul>
          <li><a href="#" className={"linkMenu"}>Início</a></li>
          <li><a href="#" className={"linkMenu"}>Sobre</a></li>
          <li><a href="#" className={"linkMenu"}>Protifólio</a></li>
          <li><a href="#" className={"linkMenu"}>Contato</a></li>
          <p className={'footerMenu'}>Desenvolvido por <br /> Eduany dos Santos</p>
        </ul>
      </nav>

      <main className={'h-content'}>

        <title>Home</title>

        <div className={'container'}>
          <p id="title" className={line} class="typing-animation"></p>
        </div>

        <button className={'h-btnDown'} onClick={() => { changeTheme() }} >
          <svg x="0px" y="0px"
            width="50px" height="50px" viewBox="0 0 612 612" >
            <path className={'h-setaDown'} d="M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782
			    	c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296
			    	c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"/>
          </svg>
        </button>
      </main>

    </section>

  )
}

export default IndexPage


function changeTheme() {

  if (typeof window.document.getElementsByClassName('h_bg4')[0] !== `undefined`) {
    window.document.getElementsByClassName('h_bg4')[0].className = ' h_bg'
  }

  if (typeof window.document.getElementsByClassName('h_bg3')[0] !== `undefined`) {
    window.document.getElementsByClassName('h_bg3')[0].className += ' h_bg4'
  }
  else if (typeof window.document.getElementsByClassName('h_bg2')[0] !== `undefined`) {
    window.document.getElementsByClassName('h_bg2')[0].className += ' h_bg3'
  } else {
    window.document.getElementsByClassName('h_bg')[0].className += ' h_bg2'
  }

}


// function escrever(str, done) {
//   var char = str.split('').reverse();
//   var typer = setInterval(function () {
//     if (!char.length) {
//       clearInterval(typer);
//       return setTimeout(done, 500); // só para esperar um bocadinho
//     }
//     var next = char.pop();
//     p.innerHTML += next;
//   }, 100);
// }

// function limpar(done) {
//   var char = p.innerHTML;
//   var nr = char.length;
//   var typer = setInterval(function () {
//     if (nr-- == 0) {
//       clearInterval(typer);
//       return done();
//     }
//     p.innerHTML = char.slice(0, nr);
//   }, 100);
// }

// function rodape(conteudos, el) {
//   if (typeof window !== `undefined`) p = window.document.getElementById("title");
//   var atual = -1;
//   function prox(cb) {
//     if (atual < conteudos.length - 1) atual++;
//     else atual = 0;
//     var str = conteudos[atual];
//     escrever(str, function () {
//       limpar(prox);
//     });
//   }
//   prox(prox);
// }
// rodape(textos);