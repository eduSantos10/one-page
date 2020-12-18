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
      </main>

    </section>

  )
}

export default IndexPage
