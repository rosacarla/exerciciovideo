//class component complexo permite aplicar estado com variaveis proprias do componente
import React, {Component} from 'react'; 

class App extends Component{ //adiciona metodo construtor para criar estado

  constructor(props){  //props inserido como parametro do metodo construtor
    super(props);

    this.state = {  //especifica o estado dentro do construtor; por padrao usa-se nomenclatura "state"
      titulo: "Primeira pagina com Class Component"  //atributo do componente com sua variavel

    }
  }

  mudar(){  //metodo mudar
    console.log("mudou"); //mensagem para testar se metodo mudar funcionou
  }

  //criacao de botao para mudar titulo da pagina automaticamente sem recarrega-la (sem F5)
  render(){  
    return (  //incluido atributo onClick para executar apos click no botao
      <div>
        <h1> {this.state.titulo} </h1> 
        <button onClick={this.mudar}>Mudar Título</button>
      </div>
    )
  }
}


export default App;
