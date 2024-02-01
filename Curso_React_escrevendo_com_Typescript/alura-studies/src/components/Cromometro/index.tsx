import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.css';

interface props{
    selecionado: Itarefa | undefined
};
export default function Cronometro({selecionado}:props) {
    // console.log('conversão', tempoParaSegundos('01:01:01') );
    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo))
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o Card e inicie o Cronometro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    );
};
