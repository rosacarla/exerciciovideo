import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Principal from './paginas/Principal';


// Componente com as rotas dos componentes das paginas
const Rotas = () => {
    return( //retorna BrowserRouter com o mapeamento de componentes Route que acessam paginas importadas
        <BrowserRouter>  
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/principal" element={<Principal/>} />
            </Routes>                  
        </BrowserRouter>
    )

}

export default Rotas;