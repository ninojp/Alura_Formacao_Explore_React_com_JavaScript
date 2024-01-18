import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from '../BotaoIcone';

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    width: 1156px;
    display: flex;
    justify-content: center;
    background: transparent;
    padding: 0;
    border: 0;
    form{
        button{
            position: relative;
            top: 20px;
            right: 60px;
        }
    }

`;

{/* foi usado !!foto para tranformar o OBJETO true em false e se for false em true */ }
const ModalZoom = ({ foto, aoFechar }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <BotaoIcone method="dialog">
                            <img src='/icones/fechar.png' alt='Icone de fechar' />
                        </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    );
};
export default ModalZoom;
