import React from 'react';
import '../duvan/InfoPubli.css';
import cardImage from '../assets/img/card.jpg';
import Icon from '../assets/img/icono.png';
import Icon2 from '../assets/img/icono2.png';

export default function InfoPubli() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className='m-0 p-0'>
        <img src={Icon} style={{ width: '120  px', height: '80px' }} ></img>
         <span className='fs-4 fw-bold'>FixAgro</span>
        </div>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-center align-items-center "   id="navbarSupportedContent">
        
          <form class="form-inline my-2 my-lg-0">
            <input className="form-control  col-10 col-md-8 col-lg-6" type="search" placeholder="Search" aria-label="Search" />

          </form>
        </div>
      </nav>
      <div className="row align-items-top " >
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
                  <button className='btn btn-success m-4'>Crear Publicación</button>
                  <button className='btn btn-success m-4'>Historial</button>
                </div>
              </div>
              <div class="container m-5">
                <div class="row">
                  <div class="col-md-6 col-lg-6 mb-3">
                    <div class="text-white shadow rounded bg-secondary p-3">
                      <h5 class="card-title px-3 text-black">Publicación en curso</h5>
                      <div class="border m-3 bg-light rounded p-3">
                        <h5 class="text-black">14/06/2024</h5>
                        <p class="text-black">Se daño la cadena a la guadaña, la cambie y no encendio más</p>
                        <button class="btn btn-success m-1 p-2 px-4">
                          <i class="bi bi-pen"></i>
                        </button>
                        <button class="btn btn-success m-1 p-2 px-4">
                          <i class="bi bi-journal-text"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-6 mb-3">
                    <div class="text-white shadow rounded bg-secondary p-3">
                      <h5 class="card-title px-3 text-black">Solicitudes de técnicos</h5>
                      <div class="border m-3 bg-light rounded p-3">
                        <h5 class="text-black">Chats</h5>
                        <p class="text-black">Tienes 5 chats pendientes</p>
                        <button class="btn btn-success m-1 p-2 px-4">
                          <i class="bi bi-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
