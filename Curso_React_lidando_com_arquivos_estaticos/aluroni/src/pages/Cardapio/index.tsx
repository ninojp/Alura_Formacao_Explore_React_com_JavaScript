import Botao from '../../components/Botao';
import styles from './Cardapio.module.scss';

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Botao />
            </nav>
        </main>
    );
};
