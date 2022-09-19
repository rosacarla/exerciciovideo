import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../Firebase";

class Cadastro extends Component{

  constructor(props){
    super(props);
    this.state = {
        email: "",
        senha: "",
        nome: "",
        sobrenome: "",
        dados:[] // array recebe dados dos inputs para posterior exibicao
    }

    this.gravar = this.gravar.bind(this);

  }

  async gravar(){  // async é metodo com execucao assincrona ou em background
    // metodo auth e create...() criam e gravam usuario no Firebase
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha) // await faz chamada sincrona, aguarda execucao 
                                                                                             // se houver outro código dentro do bloco 
    .then( async (retorno) => { // then faz o call back do retorno  

      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({ //cria demais dados do usuario
        nome: this.state.nome,
        sobrenome: this.state.sobrenome
      });

    });

      /*
    firebase.firestore().collection("usuario").add({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome
    }); */
  }

  render(){
    return(
      <div>

        <h1>Cadastro Firestore</h1>
        <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} /> <br/>
        <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} /> <br/>
        <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} /> <br/>
        <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} /> <br/>
        <button onClick={this.gravar}>GRAVAR</button> <br/>

      </div>
    )
  }
}

export default Cadastro;