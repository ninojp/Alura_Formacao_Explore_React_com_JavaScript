import { useEffect, useState } from 'react';
import Item from './Item/Item';
import cardapio from './itens.json';
import styles from './Itens.module.scss';
// import Ordenador from '../Ordenador/Ordenador';

interface IProps{
    busca: string
    filtro: number | null
    ordenador: string
}
export default function Itens(props: IProps) {
    const [lista, setLista] = useState(cardapio);
    const {busca, filtro, ordenador} = props;
    useEffect(() => {
        // AS FUNÇÕES ABAIXO ESTAVAM FORA DO ESCOPO DO useEffect(), mas estavam gerando um WARN,
        // com alguma ajuda da ALURI(ia da alura, que errou e eu mesmo consertei), 
        // eu consegui resolver desta forma
        function testaBusca(title: string) {
            const regex = new RegExp(busca, 'i');
            return regex.test(title);
        };
        function testaFiltro(id: number) {
            if (filtro !== null) return filtro === id;
            return true;
        }
        function ordenar(novaLista: typeof cardapio) {
            // switch(ordenador) {
            //     case 'porcao':
            //         return novaLista.sort((itemA, itemB) => itemA.size > itemB.size ? 1 : -1);
            //     case 'qtd_pessoas':
            //         return novaLista.sort((itemA, itemB) => itemA.serving > itemB.serving ? 1 : -1);
            //     case 'preco':
            //         return novaLista.sort((itemA, itemB) => itemA.price > itemB.price ? 1 : -1);
            //         default:
            //             return novaLista;
            // }
            // outro forma de fazer o codigo
            const ordenarPropriedadeCrescente = (
                lista: typeof cardapio,
                propriedade: 'size' | 'serving' | 'price'
              ) => {
                return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
              };
              switch (ordenador) {
                case 'porcao':
                  return ordenarPropriedadeCrescente(novaLista, 'size');
                case 'qtd_pessoas':
                  return ordenarPropriedadeCrescente(novaLista, 'serving');
                case 'preco':
                  return ordenarPropriedadeCrescente(novaLista, 'price');
                default:
                  return novaLista;
              }
        }
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    },[busca, filtro, ordenador]);
    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    );
};
