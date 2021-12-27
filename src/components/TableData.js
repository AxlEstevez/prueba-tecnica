import React, { Component } from "react";
import { Table, Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import ModalData from './ModalData';

const users = [
    {
        id: 1,
        photo: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?resize=500%2C500&ssl=1',
        name: 'Ena Cisneros Santillán',
        phone: '416-725-8261',
        nss: '675 978 837',
        rfc: 'CISE900322FL10',
    }
]

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            users,
            form: {
                id: 1,
                photo: '',
                name: '',
                phone: '',
                nss: '',
                rfc: '',
            }
        };
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(event, index) {
        event.preventDefault();
        this.setState({
            show: false,
            id: this.state.form.id,
            photo: this.state.form.photo,
            name: this.state.form.name,
            phone: this.state.form.phone,
            nss: this.state.form.nss,
            rfc: this.state.form.rfc,
        });
    }
    handleAddUser(user) {
        let newuserid = this.state.users.length + 1;
        user.id = newuserid;
        this.setState({
            users: [...this.state.users, user]
        })
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleHide() {
        this.setState({ show: false });
    }

    removeUser(index) {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: '¿Seguro qué desea eliminar este registro?',
            text: "Esta accion no se podra revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#45C254',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Eliminado',
                    text: 'El usuario ha sido eliminado',
                    icon: 'success',
                    confirmButtonColor: '#45C254',
                    confirmButtonText: 'Aceptar'
                })
                this.setState({
                    users: this.state.users.filter((e, i) => {
                        return i !== index;
                    })
                })
            }
        })

    }

    showFormUpdate(index) {
        let userAux = this.state.users[index];
        this.setState({
            show: true,
            form: userAux
        })
    }

    update(userEdit) {
        let array = this.state.users;
        users.forEach((element, i) => {
            if (element.id === userEdit.id) {
                array[i].photo = element.photo;
                array[i].name = element.name;
                array[i].phone = element.phone;
                array[i].nss = element.nss;
                array[i].rfc = element.rfc;
            }
        });
    }

    render() {
        const user = this.state.users.map((record, i) => {
            return (
                <tr className="mt-1" key={i}>
                    <td>
                        <img src={record.photo} height="25" width="25" alt="" className="mr-3" />
                    </td>
                    <td>{record.name}</td>
                    <td>{record.phone}</td>
                    <td>{record.nss}</td>
                    <td>{record.rfc}</td>
                    <td>
                        <button type="button" onClick={this.showFormUpdate.bind(this, i)} className="btn btn-outline-dark mr-3">Editar</button>
                        {" "}
                        <button type="button" onClick={this.removeUser.bind(this, i)} className="btn btn-outline-danger">Eliminar</button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="container">
                <div className="row mt-5 mb-5 text-aling-center">
                    <div className="col-md-6">
                        <h3 className="float-left ml-5">Usuarios</h3>
                    </div>
                    <div className="col-md-6">
                        <ModalData onAddUser={this.handleAddUser} />
                        <Modal show={this.state.show} onHide={this.state.show}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Editar Usuario
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={this.handleSubmit}>
                                    <label>Foto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="photo"
                                        defaultValue={this.state.form.photo}
                                        placeholder="http://"
                                        onChange={this.handleInputChange} />

                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        defaultValue={this.state.form.name}
                                        placeholder="Bruce Wayne Kent"
                                        onChange={this.handleInputChange} />

                                    <label>Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        defaultValue={this.state.form.phone}
                                        placeholder="000-000-00000"
                                        onChange={this.handleInputChange} />

                                    <label>NSS</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nss"
                                        defaultValue={this.state.form.nss}
                                        placeholder="675 978 XXX"
                                        onChange={this.handleInputChange} />

                                    <label>RFC</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="rfc"
                                        defaultValue={this.state.form.rfc}
                                        placeholder="BWKXXXXXXX"
                                        onChange={this.handleInputChange} />
                                    <Button
                                        type="submit"
                                        variant="info"
                                        className="mt-3"
                                        onClick={this.update(this.state.form)}>
                                        Aceptar
                                    </Button>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>

                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>NSS</th>
                            <th>RFC</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TableData;