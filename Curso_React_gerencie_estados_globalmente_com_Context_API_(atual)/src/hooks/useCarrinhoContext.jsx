import { useContext } from "react";
import {CarrinhoContext} from '@/context/CarrinhoContext.jsx';
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reducers/carrinhoReducer";

const addProdutoAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto
});
const removeProdutoAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId
});
const updateQuantidadeAction = (produtoId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: {produtoId, quantidade}
});

export const useCarrrinhoContext = () => {
    const {carrinho, dispatch, quantidade, valorTotal} = useContext(CarrinhoContext);
    // function mudarQuantidade(id, quantidade){
    //     return carrinho.map((itemDoCarrinho) => {
    //         if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
    //         return itemDoCarrinho;
    //     })
    // }
    function adicionarProduto (novoProduto) {
      dispatch(addProdutoAction(novoProduto));
      // Após o método some() => {dentro das cheves tem que ter um return} ou trocar as chaves por (parenteses)
      // const temOProduto = carrinho.some((itemDoCarrinho) => (
      //   itemDoCarrinho.id === novoProduto.id
      // ));
      // if(!temOProduto){
      //   novoProduto.quantidade = 1;
      //   return setCarrinho((carrinhoAnterior) => [...carrinhoAnterior, novoProduto])
      // };
      // const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);
      // setCarrinho([...carrinhoAtualizado]);
    };

    function removerProduto(id) {
      const produto = carrinho.find((item) => item.id === id);
      if(produto && produto.quantidade > 1) {
        dispatch(updateQuantidadeAction(id, produto.quantidade -1));
      }else{
        dispatch(removeProdutoAction(id));
      }
      // const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
      // const ehOUltimo = produto.quantidade === 1;
      // if(ehOUltimo){ return setCarrinho((carrinhoAnterior) => 
      //   carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
      //   );
      // };
      // const carrinhoAtualizado = mudarQuantidade(id, -1);
      // setCarrinho([...carrinhoAtualizado]);
    };

    function removerProdutoCarrinho(id) {
      dispatch(removeProdutoAction(id));
        // const produto = carrinho.filter((itemDoCarrinho) => (itemDoCarrinho.id !== id));
        // setCarrinho(produto);
    };
    return {
        carrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
        quantidade,
        valorTotal
    };
};
