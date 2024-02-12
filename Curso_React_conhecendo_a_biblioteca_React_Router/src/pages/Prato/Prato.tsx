import { useNavigate, useParams } from 'react-router-dom';
import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'componets/TagsPrato/TagsPrato';
import NotFound from 'pages/NotFound/NotFound';
import PaginaPadrao from 'componets/PaginaPadrao/PaginaPadrao';

export default function Prato() {
    // console.log(useLocation());
    // const { state } = useLocation();
    const { id } = useParams();
    // const { prato } = state as {prato: typeof cardapio[0]};
    const navegate = useNavigate();
    const prato = cardapio.find(item => item.id === Number(id));
    if(!prato){
        return <NotFound />;
    }
    return (
        <PaginaPadrao>
            <button className={styles.voltar} onClick={() => navegate(-1)}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>
                    <TagsPrato {...prato} />
                </div>
            </section>
        </PaginaPadrao>
    );
}
