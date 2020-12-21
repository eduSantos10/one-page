import * as React from "react"
import "../styles/index.scss"
var p;
var textos = ["Bem vindo!", "O foco é desenvolvimento!", "Conhecimento gera conhecimento!", "Nunca é apenas um botão!", "Encontrou o que procura?"];


const IndexPage = () => {

  return (
    <section>

      <nav>
        {/* logo */}
        <label className={'logo'}>.Me</label>

        {/* acesso do menu */}
        <input id="menu-hamburguer" type="checkbox" />
        <label for="menu-hamburguer">
          <div className={"menu"}>
            <span className={"hamburguer"}></span>
          </div>
        </label>

        {/* itens do menu */}
        <div className={"barra"}> </div>
        <ul>
          <li><a href="#" className={"linkMenu"}>Início</a></li>
          <li><a href="#" className={"linkMenu"}>Sobre</a></li>
          <li><a href="#" className={"linkMenu"}>Protifólio</a></li>
          <li><a href="#" className={"linkMenu"}>Contato</a></li>
          <p className={'footerMenu'}>Desenvolvido por <br /> Eduany dos Santos</p>
        </ul>

      </nav>



      <main className={'h-bg'}>
        <title>Home</title>
        <div className={'container'}>
          <p id="title" class="line typing-animation"></p>
        </div>
      </main>

    </section>

  )
}

export default IndexPage


function escrever(str, done) {
  var char = str.split('').reverse();
  var typer = setInterval(function () {
    if (!char.length) {
      clearInterval(typer);
      return setTimeout(done, 500); // só para esperar um bocadinho
    }
    var next = char.pop();
    p.innerHTML += next;
  }, 100);
}

function limpar(done) {
  var char = p.innerHTML;
  var nr = char.length;
  var typer = setInterval(function () {
    if (nr-- == 0) {
      clearInterval(typer);
      return done();
    }
    p.innerHTML = char.slice(0, nr);
  }, 100);
}

function rodape(conteudos, el) {
  if (typeof window !== `undefined`) p = window.document.getElementById("title");
  var atual = -1;
  function prox(cb) {
    if (atual < conteudos.length - 1) atual++;
    else atual = 0;
    var str = conteudos[atual];
    escrever(str, function () {
      limpar(prox);
    });
  }
  prox(prox);
}
rodape(textos);