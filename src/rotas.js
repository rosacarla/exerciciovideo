import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';
import NotFound from './paginas/NotFound';

// Componente com as rotas dos componentes das paginas
const Rotas = () => {
    return ( //retorna BrowserRouter com o mapeamento de componentes Route que acessam paginas importadas
        <BrowserRouter>  
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/sobre" element={<Sobre/>} />
                <Route exact={true} path="/contato" element={<Contato/>} /> 
                <Route exact={true} path="*" element={<NotFound/>} /> 
            </Routes>                  
        </BrowserRouter>
    )

}

export default Rotas;