//class component complexo permite aplicar estado com variaveis proprias do componente
import React, {Component} from 'react'; 

class App extends Component{ //adiciona metodo construtor para criar estado

  constructor(props){  //props inserido como parametro do metodo construtor
    super(props);

    this.state = {  //especifica o estado dentro do construtor; por padrao usa-se nomenclatura "state"
      titulo: "Primeira pagina com Class Component"  //atributo do componente com sua variavel
    }

    //aplicacao do metodo bind() ao construtor do componente, permite a execucao de mudar()

    this.mudar = this.mudar.bind(this); //executa o bind e traz a referencia para dentro dele
  }

  mudar(){  //metodo mudar
    
    //criada variavel para mudar o titulo da pagina
    var novoTitulo = "Aprendi a utilizar Class Component";

    //executa metodo setState, herdado de React.Component, para modificar estado do componente
    this.setState({titulo:novoTitulo});  //recarrega estado com variavel ou string e atualiza a tela automaticamente

  }

  //criacao de botao para mudar titulo da pagina automaticamente sem recarrega-la (sem F5), nem usar servidor
  render(){  
    return (  //incluido metodo onClick para executar após click no botao
      <div>
        <h1> {this.state.titulo} </h1> 
        <button onClick={this.mudar}>Mudar Título</button>
      </div>
    )
  }
}


export default App;
