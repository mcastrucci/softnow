import React, { Component }from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import Home from '../components/home/Home'


class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'home',
      loaded: false
    }
  }

  onRouteChange = (route) =>{
    this.setState ({route: route});
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    document.title = "SoftNow";
    window.scrollTo(0, 0);
    ReactGA.event({
      category: 'page-charged',
      action: this.state.route
    });
  }
  
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="es"/>
          <title>SoftNow - Office y windows a precios inalcanzables! Microsoft partners oficiales, productos legitimos</title>
          <link rel="canonical" href="http://softnow.store/home" />
          <meta name="description" content="Compra windows y office legales a precios imbatibles!. Somos partners oficiales de microsoft. Tenemos un Destacado servicio tecnico para resolver todas sus consultas y problemas durante la instalacion y despues de ella. 
          Olvidate de esos productos que se bloquean despues de algunos dias de uso!" />
        </Helmet>
        <Home/>
      </div>
    );
  }

}


export default App;
