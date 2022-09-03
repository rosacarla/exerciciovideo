import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../../estilos/estilos.css";

class Sobre extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Sobre</h1>
                <h5>Aplicação desenvolvida em linguagem Java Script e CSS</h5>
                <h5>Foi utilizada a biblioteca JavaScript do React JS versão 18.2.0</h5>
                <Link to="/"><button>Página Inicial</button></Link> <br></br>
            </div>
        )
    }
}

export default Sobre;