import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import palavras from "../palavras";

export default function Jogo(props) {

    const { letrasParaGanhar, palavraDisplay, setPalavraDisplay, jogoIniciado, setJogoIniciado, setLetrasNaoClicadas, alfabeto, erros, setArrayPalavraSelecionada, setLetrasParaGanhar } = props;

    function iniciarJogo() {
        if (!jogoIniciado) {
            setJogoIniciado(true);
            setLetrasNaoClicadas(alfabeto);
            escolhePalavra();
        }
    }

    function escolhePalavra() {
        const indice = parseInt(Math.random() * (palavras.length - 1));
        const palavraEscolhida = palavras[indice];
        console.log(palavraEscolhida);
        const arrayDefinido = palavraEscolhida.split('');
        setArrayPalavraSelecionada(arrayDefinido);
        gerarDisplayPalavra(arrayDefinido);
        setLetrasParaGanhar(arrayDefinido.length)
    }

    function gerarDisplayPalavra(arrayDefinido) {
        let palavraParaDisplay = "";
        for (let i = 0; i < (arrayDefinido.length * 2) - 1; i++) {
            if (i % 2 === 0) {
                palavraParaDisplay = palavraParaDisplay + '_';
            }
            else {
                palavraParaDisplay = palavraParaDisplay + ' ';
            }
        }
        setPalavraDisplay(palavraParaDisplay);
    }

    function contaErros() {
        if (erros === 0) {
            return forca0;
        }
        else if (erros === 1) {
            return forca1;
        }
        else if (erros === 2) {
            return forca2;
        }
        else if (erros === 3) {
            return forca3;
        }
        else if (erros === 4) {
            return forca4;
        }
        else if (erros === 5) {
            return forca5;
        }
        else if (erros === 6) {
            return forca6;
        }
    }

    function classePalavra() {
        if (erros === 6) {
            return "perdeu-o-jogo";
        }
        else if (letrasParaGanhar === 0) {
            return "ganhou-o-jogo"
        }
    }

    return (
        <div className="container-jogo">
            <img src={contaErros()} alt="" className="foto-forca" data-test="game-image" />
            <div className="botao-e-palavra">
                <button className="escolher-palavra" onClick={iniciarJogo} data-test="choose-word"   >Escolher Palavra</button>
                <h1 className={classePalavra()} data-test="word">{palavraDisplay}</h1>
            </div>
        </div>
    );
}

