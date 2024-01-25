import { useParams } from "react-router-dom";
import { Banner } from "/src/components/Banner/Banner";
import { Container } from "/src/components/Container/Container";
import { Titulo } from "/src/components/Titulo/Titulo";
import videos from "/src/json/db.json";
import { NaoEcontrada } from "/src/pages/NaoEcontrada/NaoEcontrada";

export const Player = () => {
    const parametros = useParams();
    const video = videos.find((vid) => (vid.id === Number(parametros.id)));
    if(!video){
        return <NaoEcontrada />
    }
    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Página do Player de Vídeo</h1>
            </Titulo>
            <Container>
                <iframe width="1022" height="575" 
                src={video.link}
                title={video.titulo}
                // frameborder="0" 
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                // allowfullscreen
                >
                </iframe>
            </Container>
        </>
    );
};
