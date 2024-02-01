import Item from "./Item";
import { Itarefa } from "../../types/tarefa";
import style from "./lista.module.css"

function Lista ({tarefas}: {tarefas: Itarefa[]}) {
    return (
        <aside className={style.asideStyle}>
            <h2>Estudo do Dia</h2>
            <ul>
                {tarefas.map((itemTarefa, index) => (
                  <Item
                    key={index}
                    {...itemTarefa}
                    // Poderia ser feito dessa outra forma abaixo
                    // tarefa={itemTarefa.tarefa}
                    // tempo={itemTarefa.tempo}
                  />
                ))}
            </ul>
        </aside>
    );
};
export default Lista;
