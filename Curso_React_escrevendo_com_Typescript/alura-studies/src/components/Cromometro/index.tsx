import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.css';

interface props{
    selecionado: Itarefa | undefined
    finalizarTarefa: () => void
};
export default function Cronometro({selecionado, finalizarTarefa}:props) {
    // console.log('conversão', tempoParaSegundos('01:01:01') );
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    // O [selecionado] e usado para monitorar, se ele for alterado, o useEffect faz renderização 
    //executanto novamente a função dentro dele
    }, [selecionado]);

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o Card e inicie o Cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    );
};
