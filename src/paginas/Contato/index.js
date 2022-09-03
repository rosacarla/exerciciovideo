import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/estilos.css";

class Contato extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Contato</h1>
                <h5>Desenvolvedora: Carla Edila Silveira</h5> 
                <h5>E-mail: rosa.carla@pucpr.edu.br</h5> <br></br>           
                <Link to="/"><button>Página Inicial</button></Link>                
            </div>
        )
    }

}

export default Contato;