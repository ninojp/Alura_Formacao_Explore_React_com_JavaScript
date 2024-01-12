import './colaborador.css'
import { FcDisapprove } from "react-icons/fc";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import hexToRgba from 'hex-to-rgba';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(colaborador.id);
    }
    // Criando um objeto com todas as propriedades, para serem usadas no componente favoritar
    const objPropsFavorito = {size: 25, onClick: favoritar};
    return (<div className="colaborador">
        <FcDisapprove 
            size={20} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape" style={{ backgroundColor: hexToRgba(corDeFundo, '0.2') }}>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                    // Aqui está sendo usado o espalhamento(...) para poder usar diretamente
                    //as propriedades do objeto (objPropsFavorito)
                    ? <AiFillHeart {...objPropsFavorito} color='#ff0000' />
                    : <AiOutlineHeart {...objPropsFavorito} />}
            </div>
        </div>
    </div>)
}

export default Colaborador