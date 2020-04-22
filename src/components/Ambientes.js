import React, { Component } from 'react';
import '../css/Ambientes.css'
import Navegacion from './Navegacion'
import Ambiente from './Ambiente'
import { Link } from 'react-router-dom';


const info_ambientes = {
    cero:{
        titulo:'Desierto',
        info:'Poseen una gran amplitud térmica y una muy limitada fauna y flora. En estas tierras hay algunos manantiales los cuales están distribuidos irregularmente, y en el alrededor de estos es que se suelen hallar asentamientos de personas y de animales. Ejemplo de estos desiertos se encuentran en Australia.'
    },
    uno:{
        titulo:'Bosques templados',
        info:'Estos bosques se caracterizan por ser muy irrigados donde no hay una gran vegetación comestible. Se puede en el realizar diversas actividades de agricultura y de caza. Ejemplo de estos bosques son los que se localizan en el oriente de Estados Unidos.'
    },
    dos:{
        titulo:'Tundras',
        info:'Tipo de ambiente localizado en zonas árticas y antárticas, que se caracterizan por ser estériles pues el suelo está cubierto de hielo, y en ciertas zonas puede estar cubierto de arbustos y de jungla. En estos suele mantenerse la temperatura muy baja, lo cual le impide a la personas asentarse en el.'
    },
    tres:{
        titulo:'Bosques lluviosos tropicales',
        info:'Se trata de aquel medio ambiente que se caracteriza por presentar diversas precipitaciones al año y por siempre mantener elevadas temperaturas. La vegetación en estos bosques crece rápidamente ya que no existen ninguna estación. En estos tanto el cultivo como la caza son difíciles de desarrollar.'
    },
    cuatro:{
        titulo:'Bosques boreales',
        info:'Estos ambientes son propios de zonas subárticas, en los cuales hay muy pocos veranos e inviernos muy fríos. Hay muy poca flora y animales, donde la vegetación se caracteriza por ser de hojas muy anchas y los animales que habitan suelen tener pieles muy gruesa. En este no se desarrolla mucho el cultivo, ya que suele ser muy difícil.'
    },
    cinco:{
        titulo:'Praderas',
        info:'Este tipo de ambiente se destaca por ser zonas herbáceas con suelos áridos y climas templados. Se les suele llamar como sabana en aquellas latitudes bajas. En estos se suele practicar mucho la caza. Ejemplo de ello son los situados en África.        '
    }
}
class Ambietes extends Component {
    state = {
        background: '#0162a7',
        cliks: 0,
        efecto: 'animated pulse',
        title: info_ambientes.cero.titulo,
        info: info_ambientes.cero.info
    }

    

    render() {
        return (
            <div className="cont-padre" style={{ background: `${this.state.background}90` }}>
                <Navegacion />
                <div className='cont-hijo'>
                    <div className="block-1 container">
                        <div>
                            <h2 className="titulo" style={{margin:"0px 0px 18px 0px"}}>Ambientes</h2>
                            <p>El medio ambiente es el espacio en el que se desarrolla la vida de los seres vivos y que permite la interacción de los mismos.</p>
                        </div>
                        <div className='ambientes-'>
                            <button className="btn btn-outline-info btn-a" onClick={() => this.click(-1)} >{"<"}</button>
                            <Link to={'./climas'}>
                                <Ambiente
                                    background={this.state.background}
                                    efecto={this.state.efecto}
                                />
                            </Link>
                            <button className="btn btn-outline-info btn-a" onClick={() => this.click(1)}>{">"}</button>
                        </div>
                        <div></div>
                    </div>
                    <div className="block-2 container">
                        <h4 className="titulo">{this.state.title}</h4>
                        <p >{this.state.info}</p>
                    </div>
                </div>

            </div>
        );
    }

    click(num) {
        let n_cliks = this.state.cliks

        if (num === -1) {
            this.setState({
                efecto: 'animated fadeInLeft'
            })
            if (n_cliks === 0) {
                n_cliks = 5
            } else {
                n_cliks -= 1
            }
        } else if (num === 1) {
            this.setState({
                efecto: 'animated fadeInRight'
            })

            if (n_cliks === 5) {
                n_cliks = 0
            } else {
                n_cliks += 1
            }
        }

        switch (n_cliks) {
            case 0:
                this.setState({
                    background: "#0132A7",
                    title: info_ambientes.cero.titulo,
                    info: info_ambientes.cero.info
                })
                break
            case 1:
                this.setState({
                    background: "#feb500",
                    title: info_ambientes.uno.titulo,
                    info: info_ambientes.uno.info
                })
                break
            case 2:
                this.setState({
                    background: "#b41d6c",
                    title: info_ambientes.dos.titulo,
                    info: info_ambientes.dos.info
                })
                break
            case 3:
                this.setState({
                    background: "#055b5c",
                    title: info_ambientes.tres.titulo,
                    info: info_ambientes.tres.info
                })
                break
            case 4:
                this.setState({
                    background: "#6ec6ca",
                    title: info_ambientes.cuatro.titulo,
                    info: info_ambientes.cuatro.info
                })
                break
            case 5:
                this.setState({
                    background: "#be375f",
                    title: info_ambientes.cinco.titulo,
                    info: info_ambientes.cinco.info
                })
                break
            default:
                this.setState({
                    background: "#00000",
                    title: info_ambientes.cero.titulo,
                    info: info_ambientes.cero.info
                })
                break
        }
        this.setState({
            cliks: n_cliks
        })
    }
}

export default Ambietes;