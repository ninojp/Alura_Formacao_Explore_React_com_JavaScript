import { useEffect, useState } from 'react';
import img_hipotenusa from '../../src/assets/hipotenusa.png';
import './Calculadora.css';

const Calculadora = ({calcularHipotenusa}) => {
    const [ladoA, setLadoA] = useState(0);
    const [ladoB, setLadoB] = useState(0);
    const [hipotenusa, setHipotenusa] = useState(0);
    useEffect(() => {
        if(ladoA > 0 && ladoB > 0){
            setHipotenusa(calcularHipotenusa(ladoA, ladoB));
        }
    }, [ladoA, ladoB, calcularHipotenusa]);
    return (
        <div className='div__container'>
            <div className='div__img'>
                <img src={img_hipotenusa} alt='imagem da hipotenusa' />
            </div>
            <div>
                <label>Lado B </label>
                <input 
                    placeholder='Insira o valor de A'
                    value={ladoA}
                    onChange={evento => setLadoA(evento.target.value)}
                />
            </div>
            <div>
                <label>Lado C </label>
                <input 
                    placeholder='Insira o valor de B'
                    value={ladoB}
                    onChange={evento => setLadoB(evento.target.value)}
                />
            </div>
            <p>O Valor da Hipotenusa é: <strong>{hipotenusa}</strong> </p>
        </div>
    );
};
export default Calculadora;
