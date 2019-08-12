import React, { Component } from 'react';
import './HomeFooter.css'

class HomeFooter extends Component {
    
    render (){
        return (
            <div className='home-footer'>
                <div className='home-footer__spec home-footer__spec--spec1'>
                    <p>Soporte 24/7</p>
                </div>
                <div className='home-footer__spec home-footer__spec--spec2'>
                    <p>Precios sin igual</p>
                </div>
                <div className='home-footer__spec home-footer__spec--spec3'>
                    <p>productos legitimos</p>
                </div>
            </div>
        );
    }
} 

export default HomeFooter;