import React from 'react';

import cardImage from '../assets/img/card.jpg';
import Icon from '../assets/img/icono.png';
import Icon2 from '../assets/img/icono2.png';
import noti from '../assets/img/noti.png';
import logosenior from '../assets/img/logosenior.png';
import { Link } from 'react-router-dom';


export default function InfoPubli() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <div className="d-flex align-items-center col-lg-3">
            <img src={Icon} style={{ width: '120px', height: '80px' }} alt="Icon" />
            <span className="fs-4 fw-bold p-3">FixAgro</span>
          </div>

          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex w-100 mt-2 mt-lg-0 col-sm-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>

          <div className="d-flex align-items-center col-lg-3">
            <i className="bi bi-bell fs-2 me-3"></i>
            <img src={logosenior} style={{ width: '120px', height: '80px' }} alt="Logo Senior" />
          </div>
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

                  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Crear Publicación
                  </button>


                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Descripción</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <input type='text' placeholder='¿Tienes algún problema con tu maquina?' className='form-control py-3 mb-3'></input>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar Cambios</button>
                        </div>
                      </div>
                    </div>
                  </div>
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
