

export default function Letras(props) {
    const { setJogoIniciado, letrasParaGanhar, alfabeto, palavraDisplay, setPalavraDisplay, setLetrasParaGanhar, jogoIniciado, arrayPalavraSelecionada, setLetrasClicadas, letrasClicadas, erros, setErros } = props;

    return (
        <div className="letras">
            {alfabeto.map(letra => <Letra key={letra} setJogoIniciado={setJogoIniciado} letrasParaGanhar={letrasParaGanhar} palavraDisplay={palavraDisplay} setLetrasParaGanhar={setLetrasParaGanhar} setPalavraDisplay={setPalavraDisplay} erros={erros} setErros={setErros} arrayPalavraSelecionada={arrayPalavraSelecionada} jogoIniciado={jogoIniciado} alfabeto={alfabeto} letra={letra} setLetrasClicadas={setLetrasClicadas} letrasClicadas={letrasClicadas} />)}
        </div>
    )
}

function Letra(props) {
    const { setJogoIniciado, letrasParaGanhar, palavraDisplay, setLetrasParaGanhar, setPalavraDisplay, letra, alfabeto, setLetrasClicadas, letrasClicadas, jogoIniciado, arrayPalavraSelecionada, erros, setErros } = props;

    function verificaLetra(letraRecebida) {
        console.log([...letrasClicadas, letraRecebida]);
        setLetrasClicadas([...letrasClicadas, letraRecebida]);
        if (arrayPalavraSelecionada.includes(letraRecebida)) {
            revelarLetra(letraRecebida);
        }
        else {
            verificaDerrota();
        }
    }

    function resetaJogo() {
        setJogoIniciado(false);

    }

    function verificaVitoria(qntdLetras) {
        if (letrasParaGanhar - qntdLetras === 0) {
            desativaBotoes();
            resetaJogo();
        }
    }

    function verificaDerrota() {
        let errosAtualizados = erros + 1;
        setErros(errosAtualizados);
        if (errosAtualizados === 6) {
            let palavraDisplayAtualizada = "";
            for (let i = 0; i < arrayPalavraSelecionada.length * 2 - 1; i++) {
                if (i % 2 === 0) {
                    palavraDisplayAtualizada = palavraDisplayAtualizada + arrayPalavraSelecionada[i / 2];
                }
                else {
                    palavraDisplayAtualizada = palavraDisplayAtualizada + " ";
                }
            }
            setPalavraDisplay(palavraDisplayAtualizada);
            desativaBotoes();
            resetaJogo();
        }
    }

    function desativaBotoes() {
        setLetrasClicadas(alfabeto);
    }

    function revelarLetra(letraRecebida) {
        let palavraDisplayAtualizada = "";
        let qntdLetrasAcertadas = 0;
        for (let i = 0; i < arrayPalavraSelecionada.length * 2 - 1; i++) {
            if (i % 2 === 0) {
                if (palavraDisplay[i] !== '_') {
                    palavraDisplayAtualizada = palavraDisplayAtualizada + palavraDisplay[i];

                }

                else if (arrayPalavraSelecionada[i / 2] === letraRecebida) {
                    palavraDisplayAtualizada = palavraDisplayAtualizada + letraRecebida;
                    qntdLetrasAcertadas++
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
        setLetrasParaGanhar(letrasParaGanhar - qntdLetrasAcertadas);
        verificaVitoria(qntdLetrasAcertadas)

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
        <button data-test="letter" onClick={() => verificaLetra(letra)} className={classeLetra(letra)} disabled={estadoLetra(letra)} >{letra.toUpperCase()}</button>
    )
}

