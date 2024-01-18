import styled from "styled-components";
import Titulo from "../../Titulo";
import FotosPopulares from './fotos-populares.json';

const SectionEstilizada = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
const ImgsPopulares = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;
const BtnVerMais = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;  
`;

const Populares = () => {
    return (
        <>
            
            <SectionEstilizada>
                <Titulo $alinhamento='center'>Populares</Titulo>
                {FotosPopulares.map(foto => <ImgsPopulares key={foto.id} src={foto.path} alt={foto.alt}/>)}
                <BtnVerMais>Ver Mais</BtnVerMais>
            </SectionEstilizada>
        </>
    );
};
export default Populares;
