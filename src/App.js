//class component complexo permite aplicar estado com variaveis proprias do componente
import React, {Component} from 'react'; 

class App extends Component{ //adiciona metodo construtor para criar estado

  constructor(props){  //props inserido como parametro do metodo construtor
    super(props);

    this.state = {  //especifica o estado dentro do construtor; por padrao usa-se nomenclatura "state"
      titulo: "Primeira pagina com Class Component"  //atributo do componente 

    }
  }

  //imprime na tela a variavel titulo por meio de um <h1>, acessada com this.state
  render(){  
    return (  
      <div>
        <h1> {this.state.titulo} </h1> 
      </div>
    )
  }
}


export default App;
