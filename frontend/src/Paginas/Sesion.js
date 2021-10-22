import React from 'react'
import Container from '@mui/material/Container'

class Sesion extends React.Component {

    render() {
        return (
            <div class="pt-5" style={{marginRight:'auto', marginBottom:'40px'}} >
                <h1 class="text-center" style={{margin:'30px'}}>Iniciar Sesión</h1>
    
                <Container maxWidth="xs" className="Container bg-info rounded text-white" style={{background: 'linear-gradient(to bottom right, #ff1b6b, #45caff)'}}>
                    <div className="Cool" >
                        <form>
                            <div class="form-row text-center bg-indigo py-3">

                                <div class="form-group text-center bg-indigo">
                                    <label for="inputnombre">Usuario</label>
                                    <input type="text" class="form-control bg-indigo" id="inputnombre4" placeholder="Usuario" value={this.state.username} onChange={this.handleUsernameChange} required />
                                </div>


                                <div class="form-group text-center bg-indigo">
                                    <label for="inputPassword4">Contraseña</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Contraseña" value={this.state.password} onChange={this.handlePassChange} required />
                                </div>

                                <div class="container text-center mt-3 container-fluid">
                                    <button type="button" onClick={this.handleSubmit} class="btn col-md-8 ml-auto float-center" style={{backgroundColor:'#ebf4f5', color:'black'}}>¡Listo!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Sesion