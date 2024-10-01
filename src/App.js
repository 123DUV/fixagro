import './App.css';
import Header from './Componentes/Header/header';
 import InfoPubli from './Componentes/duvan/InfoPubli'

import { Routes, Route, HashRouter } from "react-router-dom"
import Ventanita from "./Componentes/duvan/ventanita"
import Home from "./Componentes/duvan/LogIn";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/infopubli' element={<Header/>} />
        <Route exact path='/infopubli' element={<InfoPubli/>} />
        <Route exact path='/ventanita' element={<Ventanita/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
