import React, { Component } from 'react';
import '../css/Ambientes.css'
import Navegacion from './Navegacion'
import Ambiente from './Ambiente'
import { Link } from 'react-router-dom';

class Ambietes extends Component {
    state = {
        background: '#0162a7',
        cliks: 0,
        efecto: 'animated pulse'
    }
    render() {
        return (
            <div className="cont-padre" style={{ background: `${this.state.background}90` }}>
                <Navegacion />
                <div className='cont-hijo'>
                    <div className="block-1 container">
                        <div>
                            <h2 className="titulo">Ambientes</h2>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías</p>
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
                        <h4 className="titulo">Informacion</h4>
                        <p >Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>
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
                    background: "#0132A7"
                })
                break
            case 1:
                this.setState({
                    background: "#feb500"
                })
                break
            case 2:
                this.setState({
                    background: "#b41d6c"
                })
                break
            case 3:
                this.setState({
                    background: "#055b5c"
                })
                break
            case 4:
                this.setState({
                    background: "#6ec6ca"
                })
                break
            case 5:
                this.setState({
                    background: "#be375f"
                })
                break
            default:
                this.setState({
                    background: "#00000"
                })
                break
        }
        this.setState({
            cliks: n_cliks
        })
    }
}

export default Ambietes;