

export default function Letras(props) {
    const { letrasParaGanhar, alfabeto, palavraDisplay, setPalavraDisplay, setLetrasParaGanhar, jogoIniciado, setLetrasNaoClicadas, letrasNaoClicadas, arrayPalavraSelecionada, setLetrasClicadas, letrasClicadas, erros, setErros } = props;

    return (
        <div className="letras">
            {alfabeto.map(letra => <Letra letrasParaGanhar={letrasParaGanhar} palavraDisplay={palavraDisplay} setLetrasParaGanhar={setLetrasParaGanhar} setPalavraDisplay={setPalavraDisplay} erros={erros} setErros={setErros} arrayPalavraSelecionada={arrayPalavraSelecionada} jogoIniciado={jogoIniciado} alfabeto={alfabeto} letra={letra} letrasNaoClicadas={letrasNaoClicadas} setLetrasNaoClicadas={setLetrasNaoClicadas} setLetrasClicadas={setLetrasClicadas} letrasClicadas={letrasClicadas} />)}
        </div>
    )
}

function Letra(props) {
    const { letrasParaGanhar, palavraDisplay, setLetrasParaGanhar, setLetrasNaoClicadas, setPalavraDisplay, letrasNaoClicadas, letra, alfabeto, setLetrasClicadas, letrasClicadas, jogoIniciado, arrayPalavraSelecionada, erros, setErros } = props;

    function verificaLetra(letraRecebida) {
        console.log([...letrasClicadas, letraRecebida]);
        setLetrasClicadas([...letrasClicadas, letraRecebida]);
        const indiceNoAlfabeto = alfabeto.indexOf(letraRecebida);
        if (arrayPalavraSelecionada.includes(letraRecebida)) {
            console.log("deu certo")
            revelarLetra(letraRecebida);
        }
        else {
            setErros(erros + 1);
        }
    }

    function revelarLetra(letraRecebida) {
        let palavraDisplayAtualizada = "";
        for (let i = 0; i < arrayPalavraSelecionada.length * 2 - 1; i++) {
            if (i % 2 === 0) {
                if (palavraDisplay[i] !== '_') {
                    palavraDisplayAtualizada = palavraDisplayAtualizada + palavraDisplay[i];

                }

                else if (arrayPalavraSelecionada[i / 2] == letraRecebida) {
                    palavraDisplayAtualizada = palavraDisplayAtualizada + letraRecebida;
                }
                else {
                    palavraDisplayAtualizada = palavraDisplayAtualizada + "_";
                }
            }
            else {
                palavraDisplayAtualizada = palavraDisplayAtualizada + " ";
            }

        }
        setPalavraDisplay(palavraDisplayAtualizada);
        setLetrasParaGanhar(letrasParaGanhar - 1);

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

