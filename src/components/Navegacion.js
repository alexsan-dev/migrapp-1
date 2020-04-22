import React, { Component } from 'react';
import '../css/Navegacion.css'
import { Link } from 'react-router-dom';
import Menu from "../icons/menu.svg";
import Chico from "../icons/chico.svg";

class Navegacion extends Component {
    state = {}
    render() {
        return (
            <div className='container cont'>
                <img src={Menu} width="30px" alt="MenuIcon" />
                <Link to='/perfil'><img src={Chico} alt="Chico" width="35px" /></Link>
            </div>
        );
    }
}

export default Navegacion;