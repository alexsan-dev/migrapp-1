import React, { Component } from 'react';
import '../css/Perfil.css'

import Chico from "../icons/chico.svg";

class Perfil extends Component {
    state = {
        data: {}
    }
    render() {
        return (
            <div className="cont-perfil">

                <div className="cont-perfil-info container animated fadeInUp">
                    <div className='b-img-perfil'>
                        <img src={Chico} alt="Chico" width='100px' className='img-perfil' />
                    </div>
                    <div className="info-personal">
                        <h4>Hi, Alex</h4>
                        <p >Que bueno verte por aqui!</p>
                    </div>
                    <div className="info-data">
                        <h5>Data</h5>
                        <span className="badge badge-pill badge-info">Data 1</span>
                    </div>
                    <div className="info-data">
                        <h5>Data</h5>
                        <span className="badge badge-pill badge-info">Data 1</span>
                    </div>
                    <div className="info-data">
                        <h5>Data</h5>
                        <span className="badge badge-pill badge-info">Data 1</span>
                    </div>
                    <div className="info-data">
                        <h5>Data</h5>
                        <span className="badge badge-pill badge-info">Data 1</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Perfil;