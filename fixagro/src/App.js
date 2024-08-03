import logo from './logo.svg';
import './App.css';
import InfoPubli from './duvan/InfoPubli'
import { Routes, Route, HashRouter } from "react-router-dom"
import Ventanita from './duvan/ventanita'

function App(){
 
  return(
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<InfoPubli />} />
        <Route exact path='/ventanita' element={<Ventanita/>} />
      </Routes>
    </HashRouter>
    
  )
}

export default App;
