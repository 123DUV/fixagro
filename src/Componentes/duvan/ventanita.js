import React from 'react';

import { useState } from 'react';
import InfoPubli from './InfoPubli';
import cardImage from "../img/card.jpg";

export default function Ventanita() {
    
    

    return (
        <div>
            
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className="row align-items-top "  >
                    <div className="col-lg-12">
                        <div className="card mb-3 p-5 mt-5">
                            <div className="row g-0">
                                <div className="col-md-4 justify-content-center items-align-center">
                                    <img src={cardImage} className="img-fluid rounded col-md-5  col-9 col-sm-7 col-md-10 col-lg-10 col-xl-12 position-relative" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Tipo de maquina: <span className='ms-4'>Secadora</span></h5>
                                        <p className="card-text">Modelo: <span className='ms-4'>n/a</span></p>
                                        <p className="card-text">Marca: <span className='ms-4'>n/a</span></p>

                                        <button type="button" className='btn btn-success mt-5 mx-5' >
                                            Finalizar servicio
                                        </button>


                                        

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}