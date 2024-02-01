import React from "react";
import style from "./botao.module.css"

// O codigo abaixo usando o CHILDREN deu erro, eu corrigi usando: <{children: string}>
class Botao extends React.Component<{children: string,
    type?: "button" | "submit" | "reset" | undefined 
}> {
    render() {
        const {type = 'button'} = this.props
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
};
export default Botao;

