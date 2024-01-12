import Colaborador from '../Colaborador'
import './time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor2, mudarCorF}) => {
    return (
        (colaboradores.length > 0) && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <span className='span-inputC'>Cor do Colaborador</span>
            <input onChange={evento => mudarCor2(evento.target.value, time.id)} value={time.corSecundaria} type='color' className='input-cor' />
            <span className='span-inputF'>Cor do Fundo</span>
            <input onChange={event => mudarCorF(event.target.value, time.id)} value={time.corPrimaria} type='color' className='input-corF' />
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (<Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar} />);
                })}
            </div>
        </section>
    )
}
export default Time