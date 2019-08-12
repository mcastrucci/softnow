import React, { Component } from 'react';
import './Nav.css'
import logo from '../../resources/softnow_logo.png'
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

class Nav extends Component {
    componentDidMount(){
        ReactGA.pageview('/Nav');
    }
    
    render (){
        return (
            <div className='home__nav'>
                <div className='home__nav__logo'>
                    <img className="home__nav__logo__img" src={logo} alt="softnow logo" height="50"></img>
                </div>
                <div className='home__nav__category'>
                    <p className='home__nav__category--text'>categoria</p>
                </div>
                <div className='home__nav__searchfield'>
                    <input data-purpose="search-input" maxlength="200"
                        placeholder="¿que producto estas buscando?" 
                            id="header-search-field" className="home__nav__searchfield--field"></input>
                    <i className="fa fa-search home__nav__searchfield--send"></i>
                </div>
                <div className='home__nav__signin'>
                    <p className='home__nav__signin--text'>ingresar</p>
                </div>
            </div>
        );
    }
} 

export default Nav;