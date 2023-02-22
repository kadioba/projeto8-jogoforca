import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import "./styles/reset.css"
import "./styles/style.css"

export default function App() {
  return (
    <div className="tela-jogo">
      <Jogo />
      <Letras />
    </div>
  );
}
