//criacao de class component similar ao que foi feito com function e array function
import React, {Component} from 'react'; //importado o componente Component como boa pratica

//criado componente do tipo classe
class App extends Component{ //App estende de Component (heranca)

  //render() é metodo obrigatorio em componente do tipo classe; metodo construtor nao é obrigatorio
  render(){  //nao precisa especificar tipo do metodo como se faz em Java com void etc...
    return (  //render() deve ter a funcao return para retornar uma html
      <div>
        Olá, Mundo!
      </div>
    )
  }
}


export default App;


/* Funcionaria sem importacao do Component com este codigo:

import React from 'react';

class App extends React.Component{


}

export default App;*/
