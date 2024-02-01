import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './AppAluraStudies.module.css';
import Cronometro from '../components/Cromometro';
import { useState } from 'react';
import { Itarefa } from '../types/tarefa';

function AppAluraStudies() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  return (
    <div className={style.appDivStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
};
export default AppAluraStudies;
