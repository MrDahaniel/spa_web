import React from 'react'
import { Container } from '@mui/material'
import axios from 'axios'

class Usuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div class="pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-5 pe-2">
                            <div class="container bg-info rounded">
                                <div class="row text-center py-3">
                                    <h2>Información de Usuario</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-5 ps-2">
                            <div class="container bg-info rounded">
                                <div class="row text-center py-3">
                                    <h2>Información de Usuario</h2>
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