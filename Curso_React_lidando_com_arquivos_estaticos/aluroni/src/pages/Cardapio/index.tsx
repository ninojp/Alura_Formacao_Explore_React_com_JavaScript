// import Botao from '../../components/Botao';
import { useState } from 'react';
import Buscador from './Buscador/Buscador';
import styles from './Cardapio.module.scss';
// import logo from '../../assets/logo.svg';
// A melhor forma(indicado pelo React) é criar um componente. 'Agora no site aparece como um SVG e não mais como um <img>'
import {ReactComponent as Logo} from 'assets/logo.svg';
// Acima foi usado um caminho ABSOLUTO("baseUrl": "src"), definido no tsconfig.json

export default function Cardapio() {
    const [busca, setBusca] = useState('');
    return (
        <main>
            <nav className={styles.menu}>
                {/* <img src={logo} alt='Lodo do Aluroni' /> */}
                <Logo />
                {/* <Botao /> */}
            </nav>
            <header className={styles.header}>
                <div className={styles.header__texto}>
                    A Casa do Código e da Massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
            </section>
        </main>
    );
};
