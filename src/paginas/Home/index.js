import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/estilos.css";

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <Link to="/Contato"><button>Contato</button></Link> <br/>
                <Link to="/Sobre"><button>Sobre</button></Link>
            </div>
        )
    }
}

export default Home;