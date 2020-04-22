import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import Ambientes from './Ambientes'
import Climas from './Climas.js'
import '../css/animate.css'
import Perfil from './Perfil.js';
import InfoClima from './InfoClima'

class Router extends Component {
    // colocar los datos del clima
    state = {
        clima: [
            { title: 'Tropical', backcolor: 'linear-gradient(125deg, rgba(0,255,169,1) 20%, rgba(13,77,255,1) 100%)', descript: 'Son regiones de temperaturas que superan los 18 ° C casi todo el año, con más de 1500 mm de precipitaciones al año. Los países dentro de esta clasificación son cálidos y húmedos.' },
            { title: 'Seco', backcolor: 'linear-gradient(125deg, rgba(255,229,59,1) 20%, rgba(255,37,37,1) 100%)', descript: 'Son regiones con elevado nivel de radiación solar, evaporación y precipitaciones promedio entre 500 y 800 mm al año.' },
            { title: 'Templado', backcolor: 'linear-gradient(125deg, rgba(255,229,48,1) 20%, rgba(0,255,255,1) 100%)', descript: 'La temperatura oscila entre 12 y 18 °C y las precipitaciones medias son entre 600 mm y 2,000 mm anuales.' },
            { title: 'Continental', backcolor: 'linear-gradient(125deg, rgba(31,201,253,1) 20%, rgba(252,0,97,1) 100%)', descript: 'Los veranos pueden ser cálidos o fríos, pero los inviernos son muy fríos. Puede haber temperaturas desde 22 °C hasta −3 °C, de acuerdo a la estación y hora del día.' },
            { title: 'Polar', backcolor: 'linear-gradient(125deg, rgba(243,193,148,1) 20%, rgba(255,0,97,1) 100%)', descript: 'En las regiones polares siempre hay frío, ya sea en verano o invierno. No obstante, en el invierno suelen registrarse las temperaturas más bajas del planeta. Va desde 10 °C hasta -70 °C o menos.' },
            { title: 'Alta montana', backcolor: 'linear-gradient(125deg, rgba(163,44,223,1) 20%, rgba(16,106,210,1) 100%)', descript: 'Es el clima que caracteriza las cordilleras y otros puntos de altura en estructuras geológicas.' },
            { title: 'Oceanico', backcolor: 'linear-gradient(125deg, rgba(0,192,255,1) 20%, rgba(66,24,184,1) 100%)', descript: 'Las temperaturas van desde 0 °C en los meses más fríos, a 22 °C. Londres es un ejemplo de clima oceánico, donde las precipitaciones son constantes durante todo el año. Se divide en clima subtropical húmedo (Cfa), marítimo (Cfb) y oceánico subpolar (Cfc).' },
            { title: 'Gelido', backcolor: 'linear-gradient(125deg, rgba(255,10,110,1) 20%, rgba(74,60,219,1) 100%)', descript: 'Su temperatura media no supera los 0 °C. La Antártida y Groenlandia son excelentes ejemplos del clima gélido. La vida humana es muy escasa y la vida animal limitada, pero existe un número importante de fauna terrestre y marina en este clima extremo.' }
        ]
    }

    render() {
        return (
            <BrowserRouter basename="/migrapp/">
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/ambientes' component={Ambientes}></Route>
                    <Route exact path="/climas" component={Climas} />
                    <Route exact path='/perfil' render={(props) => {
                        return (
                            <Perfil
                                data={'123'}
                            />
                        )
                    }}></Route>
                    <Route exact path='/climas/:climaId' render={(props) => {
                        // console.log('Props.', props)
                        let idclima = props.location.pathname.replace('/climas/', '')
                        return (
                            <InfoClima
                                clima={this.state.clima[idclima]}
                            />
                        )
                    }}></Route>
                    {/* <Route component={Error}></Route> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router