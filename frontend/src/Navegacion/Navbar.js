import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.png'
import './Navbar.css'

const navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to="/">
                    <img src={Logo} width="200" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">a</span>
                </button>

                <div style={{ backgroundColor: '#53d0f0', borderRadius: '8px' }}>

                    <div id="navbarSupportedContent" style={{ textAlign: 'right' }}>

                        <ul className="navbar-nav" style={{ textAlign: 'right' }}>

                            <li className="nav-item " style={{ fontSize: '18px', textAlign: 'right', border: 'solid 1px black', borderRadius: '8px', borderColor: '#a9ff68', margin: '8px', backgroundColor: '#a9ff68', color: '#FE6684' }} >
                                <Link className="nav-link active" style={{ color: '#FE6684' }} aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: '18px', border: 'solid 1px black', borderRadius: '8px', borderColor: '#a9ff68', margin: '8px', backgroundColor: '#a9ff68', color: '#FE6684' }}>
                                <Link className="nav-link active" style={{ color: '#FE6684' }} aria-current="page" to="/Sesion">Iniciar Sesión</Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: '18px', border: 'solid 1px black', borderRadius: '8px', borderColor: '#a9ff68', margin: '8px', backgroundColor: '#a9ff68', color: '#FE6684' }}>
                                <Link className="nav-link active" style={{ color: '#FE6684' }} aria-current="page" to="/Reservas" >Reservas</Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: '18px', border: 'solid 1px black', borderRadius: '8px', borderColor: '#a9ff68', margin: '8px', backgroundColor: '#a9ff68', color: '#FE6684' }}>
                                <Link className="nav-link active " style={{ color: '#FE6684' }} aria-current="page" to="/Galeria" >Galería</Link>
                            </li>

                        </ul>
                        <div className="container-flex">
                            <p>¡Diversión tan grande como nuestras montañas rusas!</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default navbar