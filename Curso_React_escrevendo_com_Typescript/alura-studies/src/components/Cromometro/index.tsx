import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.css';

export default function Cronometro() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o Card e inicie o Cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    );
};
