/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo1 from '../img/Logo1.jpeg';
import "./LogIn.css";
import { Link } from 'react-router-dom';

export default function login() {
    return (
        <div className='background '>
            <div className='center col-xs-4 col-sm-6 col-md-8 col-lg-10 col-xl-12'>
                <div className='img'>
                    <img src={Logo1} style={{ height: "100vh", width: "90%"}}></img>
                </div>
                <div className='form-group  info'>
                    <div className='centerInfo'>

                        
                        <h4 className='' style={{ textAlign: "center", paddingBottom: "15px", paddingTop:"6vh"}}><b>Inicio de Sesión</b></h4>
                       <div className='pading'>
                        <label htmlFor="inputCorreo" className=''>Correo Electronico</label>
                        <input placeholder='example@gmail.com' className='form-control ' id='inputCorreo' /><br></br>
                        <label htmlFor="inputContra" className=''>Contraseña</label>
                        <input placeholder='********' className='form-control  ' id='inputContra' />
                        </div>
                        <button className='btn-lg buttonCenter' style={{marginTop:"12vh"}}>Iniciar</button>
                        <div className='footerLogin'>
                            <Link to='' style={{textDecoration:"none", color:"black"}}>
                            <h6 className='mt-3'>Olvidaste tu contraseña?</h6>
                            </Link>
                            <a href="." style={{textDecoration:"none"}}>Registrarse</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}