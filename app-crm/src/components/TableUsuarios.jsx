import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/Usuarios.scss";
import * as Icon from "react-feather";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = Global.userURL;

class TableUsuarios extends Component {
  state = {
    data: [],
    usuarios: [],
    busqueda: "",
  };

  cargarUsuarios = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
        this.setState({ usuarios: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // ACTUALIZAR
  // peticionPut = () => {
  //   axios
  //     .put(url + this.state.form.id, this.state.form)
  //     .then((response) => {
  //       this.cargarProductos();
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  peticionDelete = () => {
    axios
      .delete(url + "/" + this.state.form.id)
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.cargarUsuarios();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  seleccionarUsuario = (usuario) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: usuario.id,
        nombre: usuario.nombre,
        estado: usuario.estado,
        perfil: usuario.perfil,
      },
    });
  };

  handleChange = async (e) => {
    this.setState({ busqueda: e.target.value });
    this.filtrar(e.target.value);
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = this.state.data.filter((elemento) => {
      if (terminoBusqueda === "") {
        return elemento;
      } else if (
        elemento.id
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.estado
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.perfil
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return false;
    });
    this.setState({ usuarios: resultadosBusqueda });
  };

  componentDidMount() {
    this.cargarUsuarios();
  }

  render() {
    const { form } = this.state;
    return (
      <div>
        <div>
          <span className="ico-buscar">
            <Icon.Search size={20} />
          </span>
          <input
            className="inp-buscar"
            type="search"
            placeholder="Buscar por id, nombre, estado o perfil"
            value={this.state.busqueda}
            onChange={this.handleChange}
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th className="th2">ID</th>
              <th className="th2">Nombre</th>
              <th className="th2">Estado</th>
              <th className="th2">Perfil</th>
              <th className="th2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios &&
              this.state.usuarios.map((usuario, i) => {
                return (
                  <tr key={i}>
                    <td className="td2">{usuario.id}</td>
                    <td className="td2">{usuario.nombre}</td>
                    <td className="td2">{usuario.estado}</td>
                    <td className="td2">{usuario.perfil}</td>
                    <td className="td2">
                      <button
                        className="btn-editar"
                        onClick={() => this.seleccionarUsuario(usuario)}
                      >
                        <Icon.Edit2 size={20} />
                      </button>
                      <button
                        className="btn-eliminar"
                        onClick={() => {
                          this.seleccionarUsuario(usuario);
                          this.setState({ modalEliminar: true });
                        }}
                      >
                        <Icon.Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <Modal className="modal" isOpen={this.state.modalEliminar}>
          <ModalHeader>Eliminar Usuario</ModalHeader>
          <span className="btn-trash">
            <Icon.Trash2 size={40} />
          </span>
          <ModalBody>
            Está seguro que desea eliminar el usuario {form && form.nombre}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn-no"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              Cancelar
            </button>
            <button className="btn-si" onClick={() => this.peticionDelete()}>
              Si
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TableUsuarios;
