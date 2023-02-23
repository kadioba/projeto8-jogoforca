import forca from "../assets/forca0.png";

export default function Jogo(props) {

    const { jogoIniciado, setJogoIniciado, setLetrasNaoClicadas, alfabeto } = props;

    function iniciarJogo() {
        if (!jogoIniciado) {
            setJogoIniciado(true);
            setLetrasNaoClicadas(alfabeto);
        }
    }

    return (
        <div className="container-jogo">
            <img src={forca} alt="" className="foto-forca" />
            <div className="botao-e-palavra">
                <button className="escolher-palavra" onClick={iniciarJogo}>Escolher Palavra</button>
                <h1>_ _ _ _ _ _ _ _</h1>
            </div>
        </div>
    );
}

