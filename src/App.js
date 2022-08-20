import React from 'react'; 
import "./App.css";

const Nome = (props) => {  //criado atributo texto;
  return (  //<div></div> quebra a linha; importa a classe estilo de App.css
    <div className='estilo'> 
      { props.texto } 
    </div>
  )
}



function App() { //reuso de componente com atributo que recebe valores diferentes
  return (  //retorna sempre uma unica tag, poderia ser tag vazia <></> no lugar de <p></p>
    <p>
      <div>
        <Nome texto="Carla Edila" />
        <Nome texto="Alisson" />
        <Nome texto="Carol" />
        <Nome texto="Zilda" />
        <Nome texto="Doki" />
      </div>
      </p>
  );
}

export default App;
