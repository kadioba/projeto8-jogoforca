import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import "./styles/reset.css"
import "./styles/style.css"
import React from 'react'

export default function App() {

  const [jogoIniciado, setJogoIniciado] = React.useState(false);

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [letrasClicadas, setLetrasClicadas] = React.useState([]);
  const [letrasNaoClicadas, setLetrasNaoClicadas] = React.useState([])
  const [erros, setErros] = React.useState(0);
  const [arrayPalavraSelecionada, setArrayPalavraSelecionada] = React.useState([]);
  const [palavraDisplay, setPalavraDisplay] = React.useState("");

  return (
    <div className="tela-jogo">
      <Jogo
        jogoIniciado={jogoIniciado}
        setJogoIniciado={setJogoIniciado}
        setLetrasNaoClicadas={setLetrasNaoClicadas}
        alfabeto={alfabeto}
        erros={erros}
        setArrayPalavraSelecionada={setArrayPalavraSelecionada}
        arrayPalavraSelecionada={arrayPalavraSelecionada}
        setPalavraDisplay={setPalavraDisplay}
        palavraDisplay={palavraDisplay} />
      <Letras
        jogoIniciado={jogoIniciado}
        alfabeto={alfabeto}
        letrasNaoClicadas={letrasNaoClicadas}
        setLetrasNaoClicadas={setLetrasNaoClicadas}
        arrayPalavraSelecionada={arrayPalavraSelecionada}
        setLetrasClicadas={setLetrasClicadas}
        letrasClicadas={letrasClicadas} />
    </div>
  );
}
