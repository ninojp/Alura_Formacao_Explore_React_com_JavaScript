import { Card } from "/src/components/Card/Card";
import { Banner } from "/src/components/Banner/Banner";
import { Container } from "/src/components/Container/Container";
import { Titulo } from "/src/components/Titulo/Titulo";
import { useFavoritoContext } from "/src/contexto/FavoritosProvider";

export const Favoritos = () => {
    const {favorito} = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            {/* Aqui o ELEMENTO h1+texto é passado como CHILDREN e não como PROPs, dentro do componente */}
            <Titulo>
                <h1>Páginas de Vídeos Favoritos!</h1>
            </Titulo>
            <Container>
                {favorito.map((fav) => (<Card {...fav} key={fav.id} />))}
            </Container>
        </>
    );
};
