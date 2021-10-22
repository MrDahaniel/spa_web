import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navegacion/Navbar'
import Inicio from './Paginas/Inicio'
import Sesion from './Paginas/Sesion'
import Reservas from './Paginas/Reservas'
import Galeria from './Paginas/Galeria'
import Footer from './Navegacion/Footer'
import './index.css'

function App() {
  return (
    <div className="App">

        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Inicio}/>
            <Route path='/Sesion' exact component={Sesion}/>
            <Route path='/Reservas' exact component={Reservas}/>
            <Route path='/Galeria' exact component={Galeria}/>
          </Switch>
        </Router>
        <Footer/>


    </div>
  );
}
export default App;
