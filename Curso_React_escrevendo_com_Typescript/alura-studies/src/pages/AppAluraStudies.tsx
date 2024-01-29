import styled from 'styled-components';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './AppAluraStudies.module.css';

function AppAluraStudies() {
  return (
    <div className={style.appDivStyle}>
      <Formulario />
      <Lista />
    </div>
  );
};
export default AppAluraStudies;
