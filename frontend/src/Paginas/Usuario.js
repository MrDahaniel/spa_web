import React from 'react'
import axios from 'axios'

class Usuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            bookings: []
        }

        this.HandleUserDetails = this.HandleUserDetails.bind(this);
        this.HandleBookingData = this.HandleBookingData.bind(this);
        this.renderBookings = this.renderBookings.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async HandleUserDetails() {
        var userData = await axios
            .get("/api/park/user")
            .then((response) => { return response.data });

        this.setState({ user: userData });
    }

    async HandleBookingData() {
        var bookings = await axios
            .get("/api/park/book")
            .then((response) => { return response.data });

        this.setState({ bookings: bookings });
        console.log(bookings);
    }

    renderBookings() {
        console.log(this.state.bookings.length)
        if (this.state.bookings.length > 0) {
            return (
                <table class="table">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">Tiquete Seleccionado</th>
                        <th scope="col"></th>
                    </thead>
                </table>

            );
        }
    }

    componentDidMount() {
        this.HandleUserDetails();
        this.HandleBookingData();
    }

    render() {
        return (
            <div class="pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-6 pe-2">
                            <div class="row text-center pt-3">
                                <h2> Usuario </h2>
                            </div>
                            <div class="container bg-info rounded">
                                <div class="row py-3">
                                    <h4 class="text-center py-2">Detalles de Usuario</h4>
                                    <div class="container bg-light rounded">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <td class="text-center">Nombre de Usuario:</td>
                                                    <td class="text-center">{this.state.user.username}</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">Correo Electrónico:</td>
                                                    <td class="text-center">{this.state.user.email}</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">Teléfono:</td>
                                                    <td class="text-center">{this.state.user.phone}</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">Cumpleaños:</td>
                                                    <td class="text-center">{this.state.user.birthday}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row py-3 text-center">
                                    <div class="text-center">
                                        <button class="btn btn-warning me-2" type="button">Editar Datos Personales</button>
                                        <button class="btn btn-danger ms-2" type="button">Eliminar Usuario</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 ps-2">
                            <div class="row text-center pt-3">
                                <h2>Reservas</h2>
                            </div>
                            <div class="container bg-info rounded">
                                <div class="row py-3">
                                    <h4 class="text-center py-2">Reservas Activas</h4>
                                </div>
                                <div class="container bg-light rounded">
                                    {this.renderBookings()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Usuario