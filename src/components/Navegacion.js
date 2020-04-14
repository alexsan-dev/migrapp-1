import React, { Component } from 'react';
import '../css/Navegacion.css'
import { Link } from 'react-router-dom';

class Navegacion extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container cont'>
                <img src="/icons/menu.svg" width="30px"/>
                <Link to='/perfil'><img src="/icons/chico.svg" width="35px"/></Link>
            </div>
         );
    }
}
 
export default Navegacion;