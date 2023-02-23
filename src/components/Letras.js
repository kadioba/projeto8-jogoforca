

export default function Letras(props) {
    const { alfabeto, jogoIniciado, letrasNaoClicadas } = props;

    return (
        <div className="letras">
            {alfabeto.map(letra => <Letra letra={letra} letrasNaoClicadas={letrasNaoClicadas} />)}
        </div>
    )
}

function Letra(props) {
    const { letrasNaoClicadas, letra } = props;

    return (
        <button className={letrasNaoClicadas.includes(letra) ? "letra ativa" : "letra"} disabled={letrasNaoClicadas.includes(letra) ? false : true} >{letra.toUpperCase()}</button>
    )
}