import React, { Component} from 'react';
import firebase from '../../Firebase';

class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: ""
        }

    }
    // metodo monta componente carregado automaticamente
    async componentDidMount(){
        // metodo verifica se tem usuario logado
        await firebase.auth().onAuthStateChanged( async (usuario) =>{
            if(usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {

                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome
                    });


                });
     
            }
        });


    }

    render(){
        return(
            <div>
                Nome: { this.state.nome} <br/>
                Sobrenome: { this.state.sobrenome}
            </div>
        )
    }
}

export default Principal;

/*function Principal(){
    return(
        <div>
            <h1> Tela Principal </h1>
        </div>
    )
}*/


/*Login() {
        return(
            <div>
                <h1> Página de Login </h1>
                <Link to="/cadastro">
                <button> Ir para Cadastro </button>
                </Link>
            </div>
        )
    }*/


