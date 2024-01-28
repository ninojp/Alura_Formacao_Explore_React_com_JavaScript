import './Colaborador.css';
import React from 'react';
// const Colaborador = (props) => {
//O codigo acima Pode ser feito assim, (de forma desestruturada)
interface ColaboradorProps{
    nome: string
    cargo: string
    imagem: string
    corDeFundo: string
    data: string
}

const Colaborador = ({nome, cargo, imagem, corDeFundo, data}: ColaboradorProps) => {
    // console.log(nome)
    return (<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            {/* <img src='https://github.com/ninojp.png' alt='Edenilson JP' /> */}
            <img src={imagem} alt={`Imagem do Colaborador ${nome}`} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h5>{new Date(data).toLocaleDateString()}</h5>
        </div>
    </div>
    );
};
export default Colaborador;
