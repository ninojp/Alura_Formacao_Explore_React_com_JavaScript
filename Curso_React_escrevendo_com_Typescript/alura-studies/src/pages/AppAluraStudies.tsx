import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './AppAluraStudies.module.css';
import Cronometro from '../components/Cromometro';
import { useState } from 'react';
import { Itarefa } from '../types/tarefa';

function AppAluraStudies() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();
  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {...tarefa, selecionado: false, completado: true};
        }
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.appDivStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
};
export default AppAluraStudies;
