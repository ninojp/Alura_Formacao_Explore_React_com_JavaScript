import Colaborador from '../Colaborador/Colaborador';
import './Time.css';
const Time = (props) => {
    // console.log(props)
    // poderia ser feito assim: usando uma variável
    const corDestaque = {borderColor: props.corDestaque};
    return (
        // Poderia ser feito assim(operador ternário): (props.colaborador.length > 0) ? <section... > : ''
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corFundo}}>
            <h3 style={corDestaque}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} 
                />)}
            </div>
        </section>
    );
};
export default Time;