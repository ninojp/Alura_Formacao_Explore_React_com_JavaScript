import styled from "styled-components";
import iconeFavoritar from "./favorite_outline.png";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 282px;
  padding: 0 0 1em 0;
  margin-top: .5em;
  background-color: var(--cinza);
`;
const ImgCard = styled.img`
    width: 100%;
`;
const H2Card = styled.h2`
    font-size: 18px;
    padding: 0 1em;
`;
const ImgFavoritarCard = styled.img`
    display: flex;
    padding: 0 1em;
    width: 25px;
`;

export const Card = ({id, capa, titulo}) => {
    return (
        <CardContainer>
            <ImgCard src={capa} alt={titulo} />
            <H2Card>{titulo}</H2Card>
            <ImgFavoritarCard src={iconeFavoritar} alt="Icone de Favoritar" />
        </CardContainer>
    );
};
