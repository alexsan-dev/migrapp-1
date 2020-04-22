import React, { Component } from 'react';
import '../css/Home.css'
import { Link } from 'react-router-dom';
import Image from "../img/2480748.jpg";

class Home extends Component {
    // state = {  }
    render() {
        return (
            <div className="fondo-b">
                <div className="container cont-">
                    <img src={Image} width="300px" alt="Banner" />
                    <h2 className="title- ">Bienvenido a Migraap</h2>
                    <div className="min-cont">
                        <p className="title- lorem">Viaja a donde quieras de una manera Natural, con Migraap que conecta con la naturaleza...</p>
                        <Link to="/ambientes"><button className="btn btn-info btn-lg title-">Comenzar</button></Link>
                    </div>
                    <p className="title-">Aplicacion version 1.1.0</p>
                </div>

            </div>
        );
    }
}

export default Home;