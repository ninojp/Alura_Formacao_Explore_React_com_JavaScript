import {styled} from 'styled-components';
import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from './componentes/Cabecalho';
import BarraLateral from './componentes/BarraLateral';
import Banner from './componentes/Banner';

import backgroundImage from './assets/Banner.png';
const textoBanner = 'A galeria mais completa de fotos do espaço!';

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`;

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
      <Banner texto={textoBanner} backgroundImage={backgroundImage}/>
    </FundoGradiente>
  )
}

export default App
