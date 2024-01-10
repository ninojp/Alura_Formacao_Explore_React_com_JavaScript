import './CampoTexto.css';
// import {useState} from 'react';

// Neste caso o instrutor optou por usar uma arrow function e associa-la a uma variável, 
//mas poderia ser feito como anteriormante(Banner.js), o resultado é o mesmo(neste caso)
const CampoTexto = (props) => {
    // let valorDigitado = 'Paulo Silveira';
    // const [valorDigitado, setValorDigitado] = useState('Paulo Silveira');

    const aoDigitado = (evento) => {
        // setValorDigitado(evento.target.value);
        // console.log(valorDigitado);
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
        </div>
    );
};
export default CampoTexto;