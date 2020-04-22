import React from 'react';
import '../css/Clima.css'
import { Link } from 'react-router-dom';

const Clima = (props) => {
    return (
        <Link to={`/climas/${props.id}`}>
            <div className="cont-clm" style={{ background: props.data.backcolor }}>
                <div className="cont-clm-text">
                    <div>
                        <h3 style={{ color: '#ffffff' }}>{props.data.title}</h3>
                    </div>
                    <div>
                        <h6 style={{ color: '#3E3E3E' }}>cutomers clima</h6>

                    </div>
                </div>
                <div className="circulo-c-c c1-c" style={{ background: props.data.backcolor }}>
                </div>
            </div>
        </Link>
    );
}

export default Clima;