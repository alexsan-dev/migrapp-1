import React, { Component } from 'react';
import Navegacion from './Navegacion';
import Clima from './Clima'
import '../css/Climas.css'

class Climas extends Component {
    state = {}
    render() {
        let data = [
            {title: 'Tropical', backcolor:'linear-gradient(125deg, rgba(243,193,148,1) 20%, rgba(255,0,97,1) 100%)',descript:''},
            {title: 'Soleado', backcolor:'linear-gradient(125deg, rgba(0,255,169,1) 20%, rgba(13,77,255,1) 100%)',descript:''},
            {title: 'Arena', backcolor:'linear-gradient(125deg, rgba(31,201,253,1) 20%, rgba(252,0,97,1) 100%)',descript:''},
            {title: 'Hielo', backcolor:'linear-gradient(125deg, rgba(163,44,223,1) 20%, rgba(16,106,210,1) 100%)',descript:''},
            {title: 'Mixto', backcolor:'linear-gradient(125deg, rgba(255,229,59,1) 20%, rgba(255,37,37,1) 100%)',descript:''},
            {title: 'Fuego', backcolor:'linear-gradient(125deg, rgba(0,192,255,1) 20%, rgba(66,24,184,1) 100%)',descript:''},
            {title: 'Aire', backcolor:'linear-gradient(125deg, rgba(255,10,110,1) 20%, rgba(74,60,219,1) 100%)',descript:''},
            {title: 'Tierra', backcolor:'linear-gradient(125deg, rgba(255,229,48,1) 20%, rgba(0,255,255,1) 100%)',descript:''}
        ]
        return (
            <div className="cont-cl">
                <Navegacion />
                <div className="container">
                    <h2 class='titulo'>Climas</h2>
                    <h5>Selecciona <small className='text-muted'>algunos de nuestros climas</small></h5>
                </div>
                <div className='cont-cl2 container'>
                    {
                        data.map((valor, index)=>(
                            <Clima
                                key={index}
                                id={index}
                                data={valor}
                            />
                        ))
                    }
                    </div>
                {/* <div className="div-footer">

                </div> */}
            </div>
        );
    }
}

export default Climas;