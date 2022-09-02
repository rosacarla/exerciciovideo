/* SOMATIVA 1: 
1) No componente, deverá colocar um título de Login, 2 inputs (e-mail e senha), um botão de validação (Acessar) e uma label. 
2) Ao clicar no botão “Acessar”, deverá verificar se o campo de e-mail é igual a “eduardo.lino@pucpr.br” e senha igual a “123456”
(pode colocar seu e-mail e senha desejado). 
3) Caso os valores sejam iguais aos valores do enunciado, deverá ser mostrada a mensagem “Acessado com sucesso!” na label abaixo do botão.
4) Caso algum dos dois campos estejam com valores diferentes do enunciado, deverá ser mostrada a mensagem “Usuário ou senha incorretos!”. */

import React, {Component} from 'react';

class App extends Component{ //adiciona metodo construtor para criar estado  

  constructor(props){  //props inserido como parametro do metodo construtor
    super(props);

    this.state = {
      email: '', //variavel de estado email
    
      senha: '',  //variavel de estado senha
    
      mensagem: '' //variavel de estado mensagem
    }

    this.mudaemail = this.mudaemail.bind(this);
    this.mudasenha = this.mudasenha.bind(this);
    this.acessar = this.acessar.bind(this);  
  }
    
  mudaemail(event) {
    let state = this.state;
    state.email = event.target.value;
    this.setState(state);
  }

  mudasenha(event) {
    let state = this.state;
    state.senha = event.target.value;
    this.setState(state);
  }

  acessar(event) {
    let state = this.state;
    if (state.email === "cesrs8@gmail.com" && state.senha === "123456") {
      state.mensagem = 'Acessado com sucesso!'
    }
    if (state.email !== "cesrs8@gmail.com" || state.senha !== "123456") {
      state.mensagem = 'Usuário ou senha incorretos!'
    }  
    this.setState(state);
  }

  render() {  
    return (
      <div> 
        <h1> Login </h1>
        <input required type="text" placeholder="e-mail" size="20" name="email" onChange={(e) => this.mudaemail(e)} /><br></br> 
        <input type="text" placeholder="******" size="6" name="senha" onChange={(e) => this.mudasenha(e)} /><br></br>
        <button onClick={this.acessar}> Acessar </button> <br></br>
        <h3> {this.state.mensagem} </h3><br></br>
      </div> 
    )
  }
}

export default App;