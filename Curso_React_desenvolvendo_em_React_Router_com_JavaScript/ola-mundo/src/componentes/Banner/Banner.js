import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
const minhaFoto = 'https://github.com/ninojp.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Este App está sendo desenvolvido no Curso Alura: React desenvolvendo em React Router com JavaScript, que faz parte da Formação Alura Explore o React com JavaScript.
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt='Imagem do Banner' aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt='Minha Imagem' />
            </div>
        </div>
    );
};