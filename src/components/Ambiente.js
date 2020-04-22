import React, { Component } from 'react';
import '../css/Ambiente.css'

class Ambiente extends Component {

    render() {
        return (
            <div id="amb" className={`cont-ambiente `} style={{ background: this.props.background + '25' }}>
                <div className="circulo-c c1" style={{ background: this.props.background + '25' }}>
                    <div className="circulo-c c2" style={{ background: this.props.background + '25' }}>
                        <div className="circulo-c c3" style={{ background: this.props.background + '25' }}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ambiente;
