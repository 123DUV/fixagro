import React from 'react';
import cardImage from '../assets/img/card.jpg'

export default function InfoPubli (){
  return (
    <div>
      <div class="row align-items-top">
          <div class="col-lg-6 ">
  
            
            
  
          
  
          
            <div class="card mb-3 p-5 mt-5">
              <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center items-align-center ">
                  <img src={cardImage} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Tipo de maquina: <span className='ms-4'>Secadora</span></h5>
                    <p class="card-text ">Modelo: <span className='ms-4'>n/a</span></p>
                    <p class="card-text">Marca: <span className='ms-4'>n/a</span></p>
                    <button className='btn btn-success m-4'>Crear Publicación</button><button className='btn btn-success'>Historial</button>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
          <div class="col-lg-3">
  
        
            
  
           
          
  
          </div>
  
          <div class="col-lg-3">
  
           
           
  
           
            
  
          
  
          </div>
  
        </div>
    </div>
  )
}
