import React from "react";

class Botao extends React.Component{
    render() {
        const color = 'red'
        return(
            <button style={{ /* style={{}} é um atributo que não existe no HTML, mas é usado 
        para criar estilos*/
                backgroundColor: color
            }}> 
            Botão
            </button>
        )
    }
}

export default Botao;