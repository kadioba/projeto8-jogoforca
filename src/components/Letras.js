

export default function Letras(props) {
    const { alfabeto, jogoIniciado, setLetrasNaoClicadas, letrasNaoClicadas, arrayPalavraSelecionada, setLetrasClicadas, letrasClicadas } = props;

    return (
        <div className="letras">
            {alfabeto.map(letra => <Letra jogoIniciado={jogoIniciado} alfabeto={alfabeto} letra={letra} letrasNaoClicadas={letrasNaoClicadas} setLetrasNaoClicadas={setLetrasNaoClicadas} setLetrasClicadas={setLetrasClicadas} letrasClicadas={letrasClicadas} />)}
        </div>
    )
}

function Letra(props) {
    const { setLetrasNaoClicadas, letrasNaoClicadas, letra, alfabeto, setLetrasClicadas, letrasClicadas, jogoIniciado } = props;

    function verificaLetra(letraRecebida) {
        console.log([...letrasClicadas, letraRecebida]);
        setLetrasClicadas([...letrasClicadas, letraRecebida]);
        const indiceNoAlfabeto = alfabeto.indexOf(letraRecebida);
        //setLetrasNaoClicadas(letrasNaoClicadas.splice(indiceNoAlfabeto, 1));
        //console.log(letrasNaoClicadas.splice(indiceNoAlfabeto, 1);
    }

    function classeLetra(letraRecebida) {
        if (!jogoIniciado || letrasClicadas.includes(letraRecebida)) {
            return "letra";
        }
        else {
            return "letra ativa";
        }
    }

    function estadoLetra(letraRecebida) {
        if (!jogoIniciado || letrasClicadas.includes(letraRecebida)) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <button onClick={() => verificaLetra(letra)} className={classeLetra(letra)} disabled={estadoLetra(letra)} >{letra.toUpperCase()}</button>
    )
}

