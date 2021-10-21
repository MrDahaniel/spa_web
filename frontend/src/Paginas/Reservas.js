import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Container from '@mui/material/Container'
import './estilos.css'
import Logo from './bg.jpg'



const Reservas = () => {
    return (
        <div>
            <h1>¡Reserva ya con nosotros!</h1>

                    <Container maxWidth="xs" className="Container col-md-offset-5 bg-info rounded text-white">
                    <div className="Cool">
                    <form>

                            <div class="form-row text-center bg-indigo">
                                
                                <div class="form-group text-center bg-indigo">
                                <label for="inputnombre">Usuario</label>
                                <input type="text" class="form-control text-center bg-indigo" id="inputnombre" placeholder="Armando Casas"/>
                                </div>

                                <div class="form-group text-center bg-indigo rounded">
                                <label for="inputdateres4">Fecha</label>
                                <input type="date" class="form-control" id="inputdateres4"/>
                                </div>
                            </div>
                    
                            <div class="form-row text-center bg-indigo rounded">
                                <div class="form-group text-center bg-indigo rounded">
                                <label for="inputTicket">Tipo de tiquete</label>
                                <select id="inputTicket" class="form-control">
                                    <option selected>Elija una opción</option>
                                    <option>Tiquete oro</option>
                                    <option>Tiquete platino</option>
                                </select>
                                </div>
                    
                            </div>
                            <div class="form-group text-center bg-indigo rounded">
                                <div class="form-check text-center bg-indigo rounded">
                                <input class="form-check-input text-center" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                   Acepto los términos y condiciones
                                </label>
                                </div>
                            </div>
                            <div class="container text-center mt-20 container-fluid">
                        <button type="submit" class="btn btn-warning col-md-8 ml-auto float-center">¡Listo!</button>
                        </div>
                    </form>
                    </div>
                    </Container>
                    
        </div>
    );
}

export default Reservas
