import React from "react";
import style from "./botao.module.css"

interface props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}
export default function Botao({onClick, type, children}: props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    );
};
// Código feito com class component, no final do curso foi refatorado(acima), para function component
// O codigo abaixo usando o CHILDREN deu erro, eu corrigi usando: <{children: string}>
// class Botao extends React.Component<{
//     children: string,
//     type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }> {
//     render() {
//         const {type = 'button', onClick} = this.props
//         return (
//             <button onClick={onClick} type={type} className={style.botao}>
//                 {this.props.children}
//             </button>
//         )
//     }
// };
// export default Botao;

