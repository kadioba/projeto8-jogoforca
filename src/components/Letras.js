

export default function Letras() {
    return (
        <div className="letras">
            {alfabeto.map(letra => <Letra letra={letra} />)}
        </div>
    )
}

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letra(props) {

    return (
        <button className="letra">{(props.letra).toUpperCase()}</button>
    )
}