import * as React from "react"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <section>

      <nav>
        <label className={'logo'}>OnePage</label>
        <ul>
          <li><a href="#">Eduany</a></li>
          <li><a href="#">Experiências</a></li>
          <li><a href="#">Portifólio</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>



      <main className={'h-bg'}>
        <title>Home</title>
        <div className={'container'}>
          <h1 className={'h-title'}>Todos os caminham levam à morte. Perca-se</h1>
          <p className={'h-autor'}>Jorge Luis Borges</p>
        </div>
      </main>

    </section>

  )
}

export default IndexPage
