import './App.css';
import Header from './Componentes/Header/header';
import InfoPubli from './Componentes/duvan/InfoPubli'

import { Routes, Route, HashRouter } from "react-router-dom"
import Ventanita from "./Componentes/duvan/ventanita"
import Home from "./Componentes/duvan/LogIn";
import registrarse from "./Componentes/duvan/registrarse";
import ClienteForm from "./Componentes/santiago/formularioCliente";
import TecnicoForm from "./Componentes/santiago/formularioTecnico";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/formulariocliente' element={<ClienteForm/>}/>
        <Route exact path='/formulariotecnico' element={<TecnicoForm/>}/>
        <Route exact path='/infopubli' element={<Header/>} />
        <Route exact path='/infopubli' element={<InfoPubli/>} />
        <Route exact path='/ventanita' element={<Ventanita/>} />
        <Route exact path='/registrarse' element={<registrarse/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
