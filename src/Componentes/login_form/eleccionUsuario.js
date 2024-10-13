import Logo1 from '../img/Logo1.png';
import "./styleEleccion.css";
export default function eleccionUsuario(){
    return(
        <div className='backgroundE '>
            <div className='centerE '>
                <div className='imgE'>
                    <img src={Logo1}  className='imagenE'></img>
                    
                </div>
                <div style={{margin:"5%"}}>
                <span>Registrarse</span>
                </div>
                
                <div className='botones'>
                    
                    <button className='btn btn-dark'>Usuario</button>
                    <button className='btn btn-dark' style={{marginLeft:"20px"}}>Técnico</button>
                </div>
                
            </div>
        </div>
    )
}