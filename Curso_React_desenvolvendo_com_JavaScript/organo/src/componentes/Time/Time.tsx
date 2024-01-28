import React from 'react';
import Colaborador from '../Colaborador/Colaborador';
import { IColaborador } from "../../compartilhado/interfaces/IColaborador.tsx";
import './Time.css';

interface TimeProps {
    corDestaque: string
    corFundo: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
    // console.log(props)
    // poderia ser feito assim: usando uma variável
    const corDeDestaque = {borderColor: props.corDestaque};
    return (
        // Poderia ser feito assim(operador ternário): (props.colaborador.length > 0) ? <section... > : ''
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corFundo}}>
            <h3 style={corDeDestaque}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    corDeFundo={props.corDestaque}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    data={colaborador.data}
                />)}
            </div>
        </section>
    );
};
export default Time;
