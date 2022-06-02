import React from "react";
import Formulario from "../Formulario";
import Lista from "../Lista";
import style from'./App.module.scss'; // Importando o CSS do SASS e pelo module

function App() {
  return <div className={style.AppStyle}>
    <Formulario />
    <Lista />
    </div>;
}

export default App;
