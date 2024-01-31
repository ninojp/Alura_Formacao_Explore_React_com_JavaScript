import styled from 'styled-components';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './AppAluraStudies.module.css';
import Cronometro from '../components/Cromometro';

function AppAluraStudies() {
  return (
    <div className={style.appDivStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
};
export default AppAluraStudies;
