import styled from "styled-components";

const iconeFacebook = '/imagens/sociais/facebook.svg';
const iconeInstagram = '/imagens/sociais/instagram.svg';
const iconeTwitter = '/imagens/sociais/twitter.svg';

const Footer = styled.footer`
    display: flex;
    background-color: #04244F;
    justify-content: space-between;
    /* width: 100%; */
    min-height: 80px;
    margin-top: 50px;
    padding: 20px;
`;
const RedesSociais = styled.div`
    display: flex;
    justify-content: space-around;
    column-gap: 24px;
`;
const H3Estilizado = styled.h3`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #fff;
    font-family: Montserrat;
    padding: 0 24px;
`;

const Rodape = () => {
    return (
        <Footer>
            <RedesSociais>
                <img src={iconeFacebook} alt="Icone do Facebook" />
                <img src={iconeInstagram} alt="Icone do Instagram" />
                <img src={iconeTwitter} alt="Icone do Twitter" />
            </RedesSociais>
            <H3Estilizado>Curso Alura React: estilize componentes com Styled Components e manipule arquivos estáticos</H3Estilizado>
        </Footer>);
};
export default Rodape;
