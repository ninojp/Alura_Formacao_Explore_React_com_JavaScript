import filtros from './filtros.json';
import styles from './filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];
// Ou poderia ser feito assim:
// interface IOpcao {
//     id: number
//     label: string
// }
interface IProps{
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: IProps) {
    function selecionarFiltro(opcao: IOpcao) {
        if(filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    };
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    // className={`${styles.filtros__filtro} ${filtro === opcao.id ? styles['filtros__filtro--ativo'] : ''}`}
                    //Para podermos usar as classes condicionais do scss, vamos instalar o pacote: npm install classnames
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']]: filtro === opcao.id
                    })}
                    key={opcao.id} 
                    onClick={() => 
                    selecionarFiltro(opcao)
            }   >
                    {opcao.label}
                </button>
            ))}
        </div>
    );
};
