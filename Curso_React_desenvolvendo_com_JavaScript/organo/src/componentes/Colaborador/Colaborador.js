import './Colaborador.css';
// const Colaborador = (props) => {
//O codigo acima Pode ser feito assim, (de forma desestruturada)
const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    console.log(nome)
    return (<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            {/* <img src='https://github.com/ninojp.png' alt='Edenilson JP' /> */}
            <img src={imagem} alt={`Imagem do Colaborador ${nome}`} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
    );
};
export default Colaborador;