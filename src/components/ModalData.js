import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';

class ModalData extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            id: '',
            photo: '',
            name: '',
            phone: '',
            nss: '',
            rfc: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddUser(this.state);
        this.setState({
            show: false,
            id: '',
            photo: '',
            name: '',
            phone: '',
            nss: '',
            rfc: '',
        });
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }


    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button variant="info" onClick={this.handleShow} className="btn btn-info float-right mr-5">
                    + Agregar nuevo usuario
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Usuario Nuevo
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <label>Foto</label>
                            <input
                                type="text"
                                className="form-control"
                                name="photo"
                                value={this.state.photo}
                                placeholder="http://"
                                onChange={this.handleInputChange} />

                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                placeholder="Bruce Wayne Kent"
                                onChange={this.handleInputChange} />

                            <label>Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={this.state.phone}
                                placeholder="000-000-00000"
                                onChange={this.handleInputChange} />

                            <label>NSS</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nss"
                                value={this.state.nss}
                                placeholder="675 978 XXX"
                                onChange={this.handleInputChange} />

                            <label>RFC</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rfc"
                                value={this.state.rfc}
                                placeholder="BWKXXXXXXX"
                                onChange={this.handleInputChange} />
                            <Button type="submit" variant="info" className="mt-3">
                                Enviar
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default ModalData;