import React from "react";
import Botao from "../Botao";
import { Itarefa } from "../../types/tarefa";
import style from "./formulario.module.css";
import {v4 as uuidv4} from "uuid";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}>{
  state = {
    tarefa: '',
    tempo: '00:00'
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas, 
      { ...this.state,
        selecionado: false,
        completado: false,
        id: uuidv4()
      },
      
    ]);
    this.setState({tarefa: '', tempo: '00:00'});
  }
  render() {
    return (
      <form onSubmit={this.adicionarTarefa.bind(this)} className={style.formulario}>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">
          adicionar
        </Botao>

      </form>
    );
  };
};
export default Formulario;
