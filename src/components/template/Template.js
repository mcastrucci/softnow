import React, { Component } from 'react';
import './Template.css'
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

class Template extends Component {
    componentDidMount(){
        ReactGA.pageview('/template');
    }
    
    render (){
        return (
            <div>template</div>
        );
    }
} 

export default Template;