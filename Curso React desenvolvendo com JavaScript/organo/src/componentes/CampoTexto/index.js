import './CampoTexto.css';
// Neste caso o instrutor optou por usar uma arrow function e associa-la a uma variável, 
//mas poderia ser feito como anteriormante(Banner.js), o resultado é o mesmo(neste caso)
const CampoTexto = (props) => {
    // console.log(props.label)
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input placeholder={`${props.placeholder}...`} />
        </div>
    );
};
export default CampoTexto;