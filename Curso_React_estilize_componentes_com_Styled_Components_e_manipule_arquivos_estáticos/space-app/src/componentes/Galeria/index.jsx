import styled from "styled-components";
import Titulo from "../Titulo"
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;
const SessaoFluida = styled.section`
    flex-grow: 1;
`;

const Galeria = ({fotos=[]}) => {
    return (
        <>
            <Tags />
            <GaleriaContainer >
                <SessaoFluida>
                    <Titulo>Navegue Pela Galeria</Titulo>
                    <Imagem />

                    {/* {fotos.map(foto => foto.titulo )} */}
                    
                </SessaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
};
export default Galeria;
