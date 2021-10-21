import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Container from '@mui/material/Container'

const Sesion = () => {
    return (
        <div>
        <h1>¡Registro!</h1>

                <Container maxWidth="xs" className="Container col-md-offset-5 bg-info rounded text-white">
                <div className="Cool">
                <form>

                        <div class="form-row text-center bg-indigo">
                            
                            <div class="form-group text-center bg-indigo">
                            <label for="inputnombre">Usuario</label>
                            <input type="text" class="form-control text-center bg-indigo" id="inputnombre" placeholder="Armando Casas"/>
                            </div>

                            <div class="form-group text-center bg-indigo">
                            <label for="inputcorreo4">Correo</label>
                            <input type="correo" class="form-control" id="inputcorreo4" placeholder="armandohouses@example.com"/>
                            </div>

                            <div class="form-group text-center bg-indigo">
                            <label for="inputPassword4">Contraseña</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                            </div>

                            <div class="form-group text-center bg-indigo">
                            <label for="inputtel4">Teléfono</label>
                            <input type="tel" class="form-control" id="inputtel4" placeholder="xxx-xxx-xxxx"/>
                            </div>

                            <div class="form-group text-center bg-indigo rounded">
                            <label for="inputdate4">Fecha de Nacimiento</label>
                            <input type="date" class="form-control" id="inputdate4"/>
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

export default Sesion
