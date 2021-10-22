import React from 'react'
import Container from '@mui/material/Container'
import axios from 'axios'
import { alertTitleClasses } from '@mui/material';

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            phone: "",
            birthday: "",
            password: ""
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleBdayChange = this.handleBdayChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    }

    handleUsernameChange(event) { this.setState({ username: event.target.value }); }
    handleEmailChange(event) { this.setState({ email: event.target.value }); }
    handlePassChange(event) { this.setState({ password: event.target.value }); }
    handlePhoneChange(event) { this.setState({ phone: event.target.value }); }
    handleBdayChange(event) { this.setState({ birthday: event.target.value }); }

    handleSubmit = () => {
        if (
            this.state.username === '' || this.state.email === '' ||
            this.state.password === '' || this.state.phone === '' ||
            this.state.birthday === ''
        ) {
            return;
        }


        axios.post("/api/auth/create", this.state)
            .then((response) => response.data)
            .then((data) => this.props.history.push("/"));
    }

    render() {
        return (
            <div class="pt-5">
                <h1 class="text-center">¡Registro!</h1>
                <Container maxWidth="xs" className="Container bg-info rounded text-white">
                    <div className="Cool">
                        <form>
                            <div class="form-row text-center bg-indigo py-3">

                                <div class="form-group text-center bg-indigo">
                                    <label for="inputnombre">Usuario</label>
                                    <input type="text" class="form-control bg-indigo" id="inputnombre4" placeholder="Usuario" value={this.state.username} onChange={this.handleUsernameChange} required />
                                </div>

                                <div class="form-group text-center bg-indigo">
                                    <label for="inputcorreo4">Correo</label>
                                    <input type="email" class="form-control" id="inputcorreo4" placeholder="user@example.com" value={this.state.email} onChange={this.handleEmailChange} required />
                                </div>

                                <div class="form-group text-center bg-indigo">
                                    <label for="inputPassword4">Contraseña</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Contraseña" value={this.state.password} onChange={this.handlePassChange} required />
                                </div>

                                <div class="form-group text-center bg-indigo">
                                    <label for="inputtel4">Teléfono</label>
                                    <input type="tel" class="form-control" id="inputtel4" placeholder="Teléfono" value={this.state.phone} onChange={this.handlePhoneChange} required />
                                </div>

                                <div class="form-group text-center bg-indigo rounded">
                                    <label for="inputdate4">Fecha de Nacimiento</label>
                                    <input type="date" class="form-control" id="inputdate4" value={this.state.birthday} onChange={this.handleBdayChange} required />
                                </div>

                                <div class="container text-center mt-3 container-fluid">
                                    <button type="button" onClick={this.handleSubmit} class="btn btn-warning col-md-8 ml-auto float-center">¡Listo!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Session
