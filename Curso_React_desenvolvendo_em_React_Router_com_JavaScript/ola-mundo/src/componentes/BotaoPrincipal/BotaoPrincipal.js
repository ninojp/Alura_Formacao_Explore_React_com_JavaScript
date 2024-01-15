import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({children, tamanho}) {
    return (
        // Passando a prop [tamanho] para criar uma variação no stilo
        <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>
            {children}
        </button>
    );
};