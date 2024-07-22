import logo from './logo.svg';
import './App.css';
import InfoPubli from './duvan/InfoPubli'
import { Routes, Route, HashRouter } from "react-router-dom"

function App(){
 
  return(
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<InfoPubli />} />
      </Routes>
    </HashRouter>
    
  )
}

export default App;
