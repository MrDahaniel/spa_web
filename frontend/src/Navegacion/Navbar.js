import React from 'react'
import{Link} from 'react-router-dom'
import Logo from './Logo.png'
import './Navbar.css'
 
const navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to="/">
        <img src={Logo} width="200"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav">
        
        <li className="nav-item text-white">
          <Link className="nav-link active text-white" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item text-white">
          <Link className="nav-link active text-white" aria-current="page" to="/Sesion">Iniciar Sesión</Link>
        </li>
        <li className="nav-item text-white">
          <Link className="nav-link active text-white" aria-current="page" to="/Reservas">Reservas</Link>
        </li>
        <li className="nav-item text-white text-right">
          <Link className="nav-link active text-white text-right" aria-current="page" to="/Galeria">Galería</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
}

export default navbar