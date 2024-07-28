import React from 'react';
import '../duvan/InfoPubli.css';
import cardImage from '../assets/img/card.jpg';
import Icon from '../assets/img/icono.png';

export default function InfoPubli() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Icon} style={{ width: '150px', height:'80px' }} ></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            
          </form>
        </div>
      </nav>
      <div className="row align-items-top">
        <div className="col-lg-11">
          <div className="card mb-3 p-5 mt-5">
            <div className="row g-0">
              <div className="col-md-4 justify-content-center items-align-center">
                <img src={cardImage} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Tipo de maquina: <span className='ms-4'>Secadora</span></h5>
                  <p className="card-text">Modelo: <span className='ms-4'>n/a</span></p>
                  <p className="card-text">Marca: <span className='ms-4'>n/a</span></p>
                  <button className='btn btn-success m-4'>Crear Publicación</button>
                  <button className='btn btn-success'>Historial</button>
                </div>
              </div>
              <div className='container m-5'>
                <div className='row'>
                  <div className='col-md-11 position-relative'>
                    <div className='text-white shadow rounded bg-secondary position-relative p-3'>
                      <h5 className="card-title p-2 px-5 text-black">Publicación en curso </h5>
                      <div className='border m-3 bg-light position-relative col-md-5 rounded'>
                        <h5 className='text-black p-2'>14/06/2024</h5>
                        <p className='text-black p-2'>Se daño la cadena a la guadaña, la cambie y no encendio más</p>
                        <button className='btn btn-success m-3 p-2 px-5'>
                          <i className="bi bi-pen"></i>
                        </button>
                        <button className='btn btn-success p-2 px-5'>
                          <i className="bi bi-journal-text"></i>
                        </button>
                      </div>
                      <div className='position-absolute top-0 end-0 ms-5 col-md-5 p-3'>
                        <h5 className="card-title p-2 px-5 text-black">Solicitudes de técnicos</h5>
                        <div className='border m-3 bg-light rounded position-relative rounded'>
                          <h5 className='text-black p-2'>Chats</h5>
                          <p className='text-black p-2'>Tienes 5 notificaciones</p>
                          <button className='btn btn-success m-3 p-2 px-5'>
                            Ir a chats
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
    </div>
  );
}
