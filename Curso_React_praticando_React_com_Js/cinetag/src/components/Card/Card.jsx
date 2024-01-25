import styled from "styled-components";
import iconeDesFavoritar from "./favorite_outline.png";
import iconeFavoritar from "./favorite.png";
import { useFavoritoContext } from "/src/contexto/FavoritosProvider";
import { Link } from "react-router-dom";
import style from "./card.module.css";

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

export const Card = ({id, titulo, capa}) => {
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const iconeFav = ehFavorito ? iconeFavoritar : iconeDesFavoritar;
    return (
        <CardContainer>
            <Link to={`/${id}`} className={style.linkStyle}>
                <ImgCard src={capa} alt={titulo} />
                <H2Card>{titulo}</H2Card>
            </Link>
            <ImgFavoritarCard src={iconeFav} alt="Icone de Favoritar"
                onClick={() => {adicionarFavorito({id, titulo, capa})}}
            />
        </CardContainer>
    );
};
