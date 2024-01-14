import styles from './Menu.module.css';
import MenuLink from '../MenuLink/MenuLink.js';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>Inicio</MenuLink>
                <MenuLink to='/sobremin'>SobreMin</MenuLink>
            </nav>
        </header>
    );
};