import Botao from '../../components/Botao';
import styles from './Cardapio.module.scss';
// import logo from '../../assets/logo.svg';
// A melhor forma(indicado pelo React) é criar um componente. 'Agora no site aparece como um SVG e não mais como um <img>'
import {ReactComponent as Logo} from 'assets/logo.svg';
// Acima foi usado um caminho ABSOLUTO("baseUrl": "src"), definido no tsconfig.json

export default function Cardapio() {
    return (
        <main className={styles.mainStyled}>
            <nav className={styles.menuStyled}>
                {/* <img src={logo} alt='Lodo do Aluroni' /> */}
                <Logo />
                <Botao />
            </nav>
        </main>
    );
};
