import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

const Rodape = () => {
    const participantes = useListaDeParticipantes();
    const navegarPara = useNavigate();
    const iniciar = () => {
        navegarPara('/sorteio')
    }
    return (
        <footer className="rodape-configuracoes">
            <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>Iniciar Brincadeira</button>
            <img src="/imgs/sacolas.png" alt="Sacolas de compras" />
        </footer>
    );
};
export default Rodape;
