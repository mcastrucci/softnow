import React, { Component } from 'react';
import './Home.css'
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import Offer from '../offers/OfferBar'
import Nav from '../nav/Nav'
import Hero from './hero/Hero';
import HomeFooter from './footer/HomeFooter';

class Home extends Component {
    componentDidMount(){
        ReactGA.pageview('/home');
    }
    
    render (){
        return (
            <div className='app-home'>
                <Helmet>
                            <meta charSet="utf-8" />
                            <html lang="es"/>
                            <title>SoftNow - Office y windows a precios inalcanzables! Microsoft partners oficiales, productos legitimos</title>
                            <link rel="canonical" href="http://softnow.store/home" />
                            <meta name="description" content="Compra windows y office legales a precios imbatibles!. Somos partners oficiales de microsoft. Tenemos un Destacado servicio tecnico para resolver todas sus consultas y problemas durante la instalacion y despues de ella. 
                            Olvidate de esos productos que se bloquean despues de algunos dias de uso!" />
                </Helmet>
                <Offer/>
                <Nav/>
                <Hero/>
                <HomeFooter/>
            </div>
        );
    }
} 

export default Home;