import React from "react";
import style from'./Botao.module.scss';

class Botao extends React.Component<{texto: string}>{
    render() {
        const isActive = false
        const styles = {backgroundColor: isActive ? 'green' : 'red'} /*Se estiver true será green ;
         se estiver false será red */
        return(
            <button className={style.botao}>  {/* style={{}} é um atributo que não existe no HTML, mas é usado 
        para criar estilos*/}         
            {this.props.texto} {/* this.props serve para modificar um objeto, neste caso o escrito botão vira adicionar */}
            </button>
        )
    }
}

export default Botao;