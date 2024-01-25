import { Banner } from "/src/components/Banner/Banner";
import { Titulo } from "/src/components/Titulo/Titulo";
// import bannergroundImage from '/public/imagens/banner-home.png';
import { Card } from "/src/components/Card/Card";
// import videos from "/src/json/db.json";
// import styled from "styled-components";
import { Container } from "/src/components/Container/Container";
import { useEffect, useState } from "react";

// const ContainerCard = styled.section`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
// `;

export const Inicio = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ninojp/Alura_Formacao_Explore_React_com_JavaScript/videos")
        .then(resposta => resposta.json())
        .then(dados => {setVideos(dados)})
    }, []);
    
    return (
        <>
            {/* <Banner backgroundImage={bannergroundImage} /> */}
            <Banner imagem='home' />
            {/* Aqui o ELEMENTO h1+texto é passado como CHILDREN e não como PROPs, dentro do componente */}
            <Titulo>
                <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Container>
                {videos.map((video) => (<Card {...video} key={video.id} />))}
            </Container>
        </>
    );
};
