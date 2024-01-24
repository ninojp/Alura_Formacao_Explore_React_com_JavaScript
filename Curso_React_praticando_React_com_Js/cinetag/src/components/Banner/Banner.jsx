import styled from "styled-components";

const DivCapa = styled.div`
  width: 100%;
  height: 347px;
  /* background-image: ${props => `url(${props.$backgroundImage})`}; */
  background-size: cover;
  background-repeat: no-repeat;
`;
// export const Banner = ({backgroundImage}) => {
export const Banner = ({imagem}) => {
    return (
        // <DivCapa $backgroundImage={backgroundImage} />
        <DivCapa style={{backgroundImage: `url('/imagens/banner-${imagem}.png')`}} />
    );
};
