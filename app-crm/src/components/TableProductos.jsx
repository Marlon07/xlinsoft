import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/css-productos/TableProductos.scss";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Swal from "sweetalert2";

const url = Global.baseURL;

class TableProductos extends Component {
  state = {
    data: [],
    productos: [],
    busqueda: "",
    modalEliminar: false,
    modalEditar: false,
    form: {
      id: "",
      nombre: "",
      descripcion: "",
      valorUnitario: "",
      estado: "",
      tipoModal: "",
    },
  };

  modalDeleteSuccess = () => {
    Swal.fire({
      html: "Producto eliminado satisfactoriamente",
      timer: 2000,
      timerProgressBar: true,
      icon: "success",
      confirmButtonColor: "#173e63",
    });
  };

  modalUpdateSuccess = () => {
    Swal.fire({
      html: "Producto actualizado satisfactoriamente",
      timer: 2000,
      timerProgressBar: true,
      icon: "success",
      confirmButtonColor: "#173e63",
    });
  };

  cargarProductos = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
        this.setState({ productos: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // ACTUALIZAR
  peticionPut = () => {
    axios
      .put(url + "/" + this.state.form.id, this.state.form)
      .then((response) => {
        this.setState({ modalEditar: false });
        this.cargarProductos();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionDelete = () => {
    axios
      .delete(url + "/" + this.state.form.id)
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.cargarProductos();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  seleccionarProducto = (producto) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        valorUnitario: producto.valorUnitario,
        estado: producto.estado,
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
        elemento.valorUnitario
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase().length > 3) ||
        elemento.estado
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return false;
    });
    this.setState({ productos: resultadosBusqueda });
  };

  modalEditar = () => {
    this.setState({ modalEditar: !this.state.modalEditar });
  };

  componentDidMount() {
    this.cargarProductos();
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
            placeholder="Buscar por id, nombre, valor unitario o estado"
            value={this.state.busqueda}
            onChange={this.handleChange}
          />
          <NavLink to="/productos" activeClassName="active">
            <span className="btn-registrar">Registrar Nuevo</span>
          </NavLink>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Valor Unitario</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productos &&
              this.state.productos.map((producto, i) => {
                return (
                  <tr key={i}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>
                      &#36;{" "}
                      {new Intl.NumberFormat("es-ES").format(
                        producto.valorUnitario
                      )}
                    </td>
                    <td>{producto.estado}</td>
                    <td>
                      <button
                        className="btn-editar"
                        onClick={() => {
                          this.seleccionarProducto(producto);
                          this.modalEditar();
                        }}
                      >
                        <Icon.Edit2 size={20} />
                      </button>
                      <button
                        className="btn-eliminar"
                        onClick={() => {
                          this.seleccionarProducto(producto);
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

        <Modal isOpen={this.state.modalEliminar}>
          <span className="btn-trash">
            <Icon.Trash2 size={40} />
          </span>
          <ModalHeader>Eliminar Producto</ModalHeader>
          <ModalBody>
            Está seguro que desea eliminar el producto {form && form.nombre}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn-no"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              Cancelar
            </button>
            <button
              className="btn-si"
              onClick={() => {
                this.peticionDelete();
                this.modalDeleteSuccess();
              }}
            >
              Si
            </button>
          </ModalFooter>
        </Modal>

        <Modal className="modal" isOpen={this.state.modalEditar}>
          <div className="modal-content-editar">
            <ModalHeader>Editar Producto</ModalHeader>

            <ModalBody className="modalEditar">
              <label className="label" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="input"
                type="text"
                name="nombre"
                id="nombre"
                onChange={this.handleChange}
                value={form ? form.nombre : ""}
              />

              <label className="label" htmlFor="descripcion">
                Descripción
              </label>
              <textarea
                className="textarea"
                type="text"
                name="descripcion"
                id="descripcion"
                onChange={this.handleChange}
                value={form ? form.descripcion : ""}
              />

              <label className="label" htmlFor="valorUnitario">
                Valor Unitario
              </label>
              <input
                className="input"
                type="text"
                name="valorUnitario"
                id="valorUnitario"
                placeholder="$"
                onChange={this.handleChange}
                value={form ? form.valorUnitario : ""}
              />

              <label className="label" htmlFor="estado">
                Estado
              </label>
              <div className="caja">
                <select
                  className="select"
                  id="estado"
                  name="estado"
                  onChange={this.handleChange}
                  value={form.estado}
                >
                  <option>Seleccionar ...</option>nombre
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No disponible</option>
                </select>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn-no"
                onClick={() => this.setState({ modalEditar: false })}
              >
                Cancelar
              </button>
              <button
                className="btn-actualizar"
                onClick={() => {
                  this.peticionPut();
                  this.modalUpdateSuccess();
                }}
              >
                Actualizar
              </button>
            </ModalFooter>
          </div>
        </Modal>
      </div>
    );
  }
}

export default TableProductos;
