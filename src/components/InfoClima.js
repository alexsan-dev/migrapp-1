import React from 'react';
import '../css/Infoclima.css'

import Chico from "../icons/chico.svg";

const InfoClima = (props) => {
    return (
        <div className="cont-infoclima">
            <div className="cont-info-1 animated fadeInDown" style={{ background: props.clima.backcolor }}>

            </div>
            <div className="cont-info-2 container">
                <h4 className="cc-tt">Informacion de <span className="icbad badge badge-primary">{props.clima.title}</span></h4>
                <div className='car-details animated fadeInRight'>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                </div>
                <div className='c-info-data'>
                    <img className="ic-img" src={Chico} alt="Chico" />
                    <div className='ic-personal-data'>
                        <h6>Alex Chan</h6>
                        <p>CTO Funder Migrapp (UVG)</p>
                    </div>
                </div>
                <p style={{ margin: '20px 0px' }}>
                    {props.clima.descript}
                </p>
            </div>
        </div>
    );
}

export default InfoClima;