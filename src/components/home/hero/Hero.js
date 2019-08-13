import React, { Component } from 'react';
import './Hero.css'
import logo from '../../../resources/softnow_logo.png'

class Hero extends Component {
    
    render (){
        return (
            <div className='hero'>
                <div className='hero__grid'>
                    <div className='hero__logo'>
                        <img className="hero__logo__img" src={logo} alt="softnow logo hero" height="100"></img>
                    </div>
                    <div className='hero__description'>
                        <p className='hero__description__text--1'>Compra software legitimo</p>
                        <p className='hero__description__text--2'>¡Somos microsoft partners!, olvidate de esos productos que dejan de funcionar a los pocos dias.</p>
                        <p className='hero__description__text--3'>Tenemos un Soporte tecnico 24x7, consulta cualquier duda que tengas!</p>
                    </div>
                </div>
                <div className='hero__buttons'>
                    <div className='hero__buttons__button hero__buttons__button--buy'><p>comprar</p></div>
                    <div className='hero__buttons__button hero__buttons__button--about'><p>saber mas</p></div>
                    <div className='hero__buttons__button hero__buttons__button--support'><p>Obtener soporte</p></div>
                </div>
            </div>
        );
    }
} 

export default Hero;