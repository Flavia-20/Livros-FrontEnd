import * as React from 'react';
import style from "./modules/CabecalhoPerfil.module.css"

function CabecalhoPerfil(props) {
    return(
    
        <header>
            <div className={style.divCabecalho}>
                <img src={props.foto} alt="foto de perfil"/>
                <h2> {props.nome}</h2> 
                <h3>Lidos: {props.lidos}</h3>
                <h3>Lendo: {props.lendo}</h3>
                <h3>Quer ler: {props.querLer}</h3>
                
            </div>
            <hr></hr>
        </header>
    
    
    )
}

export default CabecalhoPerfil;

