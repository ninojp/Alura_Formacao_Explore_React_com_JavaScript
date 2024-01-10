import './colaborador.css'
import { FcDisapprove } from "react-icons/fc";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        <FcDisapprove size={20} className='deletar' onClick={aoDeletar} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador