import React from 'react';
import '../css/Infoclima.css'

const InfoClima = (props) => {
    return ( 
        <div className="cont-infoclima">
            <div className="cont-info-1 animated fadeInDown">

            </div>
            <div className="cont-info-2 container">
                <h4 className="cc-tt">Informacion de <span className="icbad badge badge-primary">Clima</span></h4>
                <div className='car-details animated fadeInRight'>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                    <div className='data-clima'></div>
                </div>
                <div className='c-info-data'>
                    <img className="ic-img" src='/icons/chico.svg'/>
                    <div className='ic-personal-data'>
                        <h6>Alex Chan</h6>
                        <p>CTO Funder Migrapp (UVG)</p>
                    </div>
                </div>
                <p style={{margin:'20px 0px'}}>
                Cree un segundo "fotograma clave @" que reinicie su animación, el único problema con esto es que no puede establecer ninguna propiedad de animación para el reinicio de la animación (simplemente vuelve a aparecer)
                </p>
            </div>
        </div>
     );
}
 
export default InfoClima;