import './Banner.css';
import React from 'react';

interface BannerProps{
    enderecoImagem: string
    // Aqui o ? ponto de interrogação é para indicar que a PROPs é opcional
    textoAlternativo?: string
}
const Banner = ({enderecoImagem, textoAlternativo}:BannerProps) => {
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
}
export default Banner;
