import React, { Component } from 'react';
import './OfferBar.css'

class OfferBar extends Component {
    
    render (){
        return (
            <div className='offer-bar'>
                <p className='offer-bar__text--1'>Oferta especial de Windows 10! hasta 80% de descuento, Haz click aqui!</p>
                <i class="fa fa-times-circle"></i>
                <p className='offer-bar__text--2'>La oferta termina en 100 dias!</p>
            </div>
        );
    }
} 

export default OfferBar;