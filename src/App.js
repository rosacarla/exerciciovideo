import React from 'react'; 
import "./App.css";

const Botao = (props) => { //criados botoes para a pagina
  return ( //adicionado estilo1 css aos botoes
    <div>
      <button className="estilo1"> { props.texto } </button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Botao texto="Gravar" />
      <br></br>
      <Botao texto="Excluir" />
      <br></br>
      <Botao texto="Limpar" />
    </div>
  );
}

export default App;
