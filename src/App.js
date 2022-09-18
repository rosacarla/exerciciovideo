/* Atividade Formativa - Semana 6
Construa uma nova aplicação em React que tenha inicialmente 2 inputs text e 2 botões na página.
Input text 1: deverá ser um campo para cadastro do nome do usuário.
Input text 2: deverá ser um campo para cadastro do sobrenome do usuário.
Botão 1: Deverá gravar os valores dos 2 inputs no banco de dados Firestore.
Botão 2: Deverá trazer todos os dados gravados no Firestore e mostrá-los na página do componente. */

import React, {Component} from 'react';
import firebase from "./Firebase";
import "./estilos/estilos.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        nome: "",
        sobrenome: "",
        dados:[] // array recebe dados dos inputs para posterior exibicao
    }

    this.gravar = this.gravar.bind(this);
    this.listar = this.listar.bind(this);
  }


  gravar(){
    firebase.firestore().collection("usuario").add({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome
    });
  }

  listar(){
    firebase.firestore().collection("usuario").get().then((retorno) => {
      // Metodo then() faz call back da chamada; retorno fica dentro da variavel passada como parametro de then //
      var state = this.state;
      retorno.forEach((item) => { // var item representa cada objeto incluido no array //
        // Retorno dos dados do Firestore sao colocados dentro do array dados //
        state.dados.push({
          id: item.id, 
          nome: item.data().nome,
          sobrenome: item.data().sobrenome
        });

      });
      this.setState(state);
    });
  }



  render(){
    return(
      <div>

        <h1>Cadastro Firestore</h1>
        <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} /> <br/>
        <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} /> <br/>
        <button onClick={this.gravar}>GRAVAR</button> <br/>
        <button onClick={this.listar}>LISTAR</button> <br/>

        <ul>
            {this.state.dados.map((item)=>{  // Laco de repeticao map tem a variavel item como parametro
              return(  // Retorna objetos do array em HTML //
                <li> {item.nome + " " + item.sobrenome} </li> 
              )
            })}
        </ul>

      </div>
    )
  }
}

export default App;