import {styled} from 'styled-components';
import {useEffect, useState} from 'react';
import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from './componentes/Cabecalho';
import BarraLateral from './componentes/BarraLateral';
import Banner from './componentes/Banner';
import bannergroundImage from './assets/Banner.png';
import Galeria from './componentes/Galeria';
import fotos from './fotos.json';
import ModalZoom from './componentes/ModalZoom';
import Rodape from './componentes/Rodape';

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoAlternarFavorito = (foto) => {
    // fotoSelecionada pode ser NULL, então para compara-lo somente de ele NÃO for NULL se usou fotoSelecionada?
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }));
  };
  
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho 
          filtro={filtro} 
          setFiltro={setFiltro} 
        />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner 
              texto = 'A galeria mais completa de fotos do espaço!'
              backgroundImage={bannergroundImage}/>
              {/* Aqui está sendo PASSADO o array com as fotos para o componente Galeria */}
            <Galeria
              aoAlternarFavorito={aoAlternarFavorito} 
              aoFotoSelecionada={(foto => setFotoSelecionada(foto))} 
              fotos={fotosDaGaleria}
              setTag={setTag}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    <Rodape />
    </FundoGradiente>
  );
};
export default App
