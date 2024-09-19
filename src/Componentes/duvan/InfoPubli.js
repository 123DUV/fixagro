import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import cardImage from "../img/card.jpg";
import { Modal, Button } from 'react-bootstrap';



export default function InfoPubli() {

  const [descripcion, setDescripcion] = useState("");

  const cambioInput = (e) => {
    setDescripcion(e.target.value);
  }
 
  return (
    <div>
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

                  <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Crear Publicación
                  </button>


                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Descripción</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <input type='text' placeholder='¿Tienes algún problema con tu maquina?' onChange={cambioInput} value={descripcion} className='form-control py-3 mb-3'></input>
                          {/* <p className='text-black border' >{descripcion}</p> */}
                          
                          
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
                          <button type="button" className="btn btn-success" data-bs-dismiss="modal">Guardar Cambios</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* fin modal */}

                  <button className='btn btn-success m-4'>Historial</button>

                </div>
              </div>
              <div className="container m-5">
                <div className="row">
                  <div className="col-md-6 col-lg-6 mb-3">
                    <div className="text-white shadow rounded bg-secondary p-3">
                      <h5 className="card-title px-3 text-black">Publicación en curso</h5>
                      <div className="border m-3 bg-light rounded p-3">
                        <h5 className="text-black">14/06/2024</h5>
                        <p className="text-black">Se daño la cadena a la guadaña, la cambie y no encendio más</p>

                        <button className="btn btn-success m-1 p-2 px-4">
                          <i className="bi bi-pen"></i>
                        </button>
                        <button className="btn btn-success m-1 p-2 px-4">
                          <i className="bi bi-journal-text"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6 mb-3">
                    <div className="text-white shadow rounded bg-secondary p-3">
                      <h5 className="card-title px-3 text-black">Solicitudes de técnicos</h5>
                      <div className="border m-3 bg-light rounded p-3">
                        <h5 className="text-black">Chats</h5>
                        <p className="text-black">Tienes 5 chats pendientes</p>
                        <button className="btn btn-success m-1 p-2 px-4">
                          <i className="bi bi-pen"></i>
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
    </div >
  );
}
