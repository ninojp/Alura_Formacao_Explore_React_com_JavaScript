import Item from "./Item";
import { Itarefa } from "../../types/tarefa";
import style from "./lista.module.css"

interface props {
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}
function Lista ({tarefas, selecionaTarefa}:props) {
    return (
        <aside className={style.asideStyle}>
            <h2>Estudo do Dia</h2>
            <ul>
                {tarefas.map((itemTarefa) => (
                  <Item
                    selecionaTarefa={selecionaTarefa}
                    key={itemTarefa.id}
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
