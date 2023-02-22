import forca from "../assets/forca0.png";

export default function Jogo() {
    return (
        <div className="container-jogo">
            <img src={forca} alt="" className="foto-forca" />
            <div className="botao-e-palavra">
                <button className="escolher-palavra" >Escolher Palavra</button>
                <h1>_ _ _ _ _ _ _ _</h1>
            </div>
        </div>
    );
}