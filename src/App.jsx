import { useState } from "react";
import { Tropic, FadeIn, MenuIcon } from "./components";

import "./App.scss";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <button
        className="btn btn-primary btn-menu"
        onClick={() => setMenu(!menu)}
      >
        <MenuIcon active={menu} color="#fff" />
      </button>

      <article className={`menu ${menu ? "show" : ""}`}>
        <button onClick={() => setMenu(!menu)}>
          <MenuIcon active={menu} />
        </button>
      </article>

      <article className="grid-container">
        <div className="card-container">
          <Tropic icon="/svg/profile.svg" name="Sobre mim"/>
          <FadeIn className="span">
            Sou um desenvolvedor apaixonado por tecnologia, com foco em criar
            soluções simples, eficientes e escaláveis. Gosto de aprender coisas
            novas, resolver problemas e transformar ideias em projetos reais.
          </FadeIn>
        </div>
        
        <div className="card-container">
          <Tropic icon="/svg/profile.svg" name="Tecnologias"/>
          <FadeIn className="span">
            Sou um desenvolvedor apaixonado por tecnologia, com foco em criar
            soluções simples, eficientes e escaláveis. Gosto de aprender coisas
            novas, resolver problemas e transformar ideias em projetos reais.
          </FadeIn>
        </div>

        <div className="card-container">
          <Tropic icon="/svg/profile.svg" name="Tecnologias"/>
          <FadeIn className="span">
            Sou um desenvolvedor apaixonado por tecnologia, com foco em criar
            soluções simples, eficientes e escaláveis. Gosto de aprender coisas
            novas, resolver problemas e transformar ideias em projetos reais.
          </FadeIn>
        </div>

        <div className="card-container">
          <Tropic icon="/svg/profile.svg" name="Tecnologias"/>
          <FadeIn className="span">
            Sou um desenvolvedor apaixonado por tecnologia, com foco em criar
            soluções simples, eficientes e escaláveis. Gosto de aprender coisas
            novas, resolver problemas e transformar ideias em projetos reais.
          </FadeIn>
        </div>
      </article>
    </div>
  );
}

export default App;
