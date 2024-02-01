import { Itarefa } from "../../../types/tarefa";
import style from "./Item.module.css";

interface props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}
export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}:props) {
    // console.log('O item selecionado é: ',  {tarefa, tempo, selecionado, completado, id});
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : '' }`}
            onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    );
};
