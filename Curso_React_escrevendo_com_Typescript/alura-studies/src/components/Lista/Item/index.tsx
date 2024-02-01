import { Itarefa } from "../../../types/tarefa";
import style from "./Item.module.css";

export default function Item({tarefa, tempo, selecionado, completado, id}:Itarefa) {
    console.log('O item selecionado é: ',  {tarefa, tempo, selecionado, completado, id});
    return (
        <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    );
};
