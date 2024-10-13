import './App.css';
import Header from './Componentes/Header/header';
import InfoPubli from './Componentes/infoMaquiCliente/InfoPubli'

import { Routes, Route, HashRouter } from "react-router-dom"
import Ventanita from "./Componentes/infoMaquiCliente/ventanita"
import Home from "./Componentes/login_form/LogIn";

import ClienteForm from "./Componentes/login_form/formularioCliente";
import TecnicoForm from "./Componentes/login_form/formularioTecnico";
import EleccionUsuario from './Componentes/login_form/eleccionUsuario';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/eleccionusuario' element={<EleccionUsuario/>}/>
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
