import React, { Component } from 'react';
import '../css/Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    // state = {  }
    render() {
        return (
            <div className="fondo-b">
                <div className="container cont-">
                    <img src="/img/2480748.jpg" width="300px"/>
                    <h2 className="title- ">Welcome to Migraap</h2>
                    <div className="min-cont">
                        <p className="title- lorem">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                        <Link to="/ambientes"><button className="btn btn-info btn-lg title-">Comenzar</button></Link>
                    </div>
                    <p className="title-">Aplicacion version 1.0.0</p>
                </div>
                
            </div>
        );
    }
}

export default Home;