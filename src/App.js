/* Com a utilização de Class Componente e state, crie um novo componente que
possua 2 (dois) botões e uma label com um número que começa em 0 (zero):
Botão 1: adicionar 1 ao valor da label.
Botão 2: subtrair 1 ao valor da label.
Label: demonstrar o valor no componente. */

import React, {Component} from 'react'; 
import './App.css';

class App extends Component{ //adiciona metodo construtor para criar estado

  constructor(props){  //props inserido como parametro do metodo construtor
    super(props);
    this.state = {  //especifica o estado dentro do construtor
      contador: 0 //declara/inicia variavel cocntador
    }   //aplicacao do metodo bind() ao construtor permite a execucao de aumentar() e diminuir()
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);    
  }

  aumentar(){  //metodo aumentar

    let state = this.state;  //obtem estado do componente para variavel chamada state
    state.contador +=1;  //dentro de state tem a variavel contador
    this.setState(state); //atualiza estado do componente com aumento da variavel
  }

  diminuir(){ //metodo diminuir

    let state = this.state;
    state.contador -=1;  //nos 2 metodos (aumentar, diminuir), modifica-se valor do contador para aplicar novo estado ao componente
    this.setState(state); //atualiza estado do componente com diminuicao da variavel
  }
    
   
  //criacao de botoes para alterar valores da variavel da state
  render(){  
    return (
      <div>
        <button onClick={this.aumentar}> Aumentar </button> <br></br>
        <button onClick={this.diminuir}> Diminuir </button> <br></br>
        Valor: {this.state.contador}
      </div>
    )
  }
}

export default App;
