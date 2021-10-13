import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/MaestroProductos.scss";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = Global.baseURL;

class TableProductos extends Component {
  state = {
    data: [],
    modalEliminar: false,
    form: {
      id: "",
      nombre: "",
      descripcion: "",
      valorUnitario: "",
      estado: "",
      tipoModal: "",
    },
  };

  cargarProductos = () => {
    axios
      .get(url)
      .then((response) => {
        // console.log(res.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Añadir producto
  peticionPost = async () => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.cargarProductos();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = () => {
    axios
      .put(url + this.state.form.id, this.state.form)
      .then((response) => {
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
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
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
          <input className="inp-buscar" type="search" placeholder="Buscar" />
          <NavLink
            to="/productos"
            activeClassName="active"
            // onClick={() => {
            //   this.setState({ form: null, tipoModal: "insertar" });
            // }}
          >
            <span className="btn-registrar">Registrar Nuevo</span>
          </NavLink>
        </div>
        <br />
        <br />
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
            {this.state.data.map((producto, i) => {
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
                      onClick={() => this.seleccionarProducto(producto)}
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
        <Modal className="modal" isOpen={this.state.modalEliminar}>
          {/* <div className="overlay"> */}
            <ModalBody>
              Está seguro que desea eliminar el producto <br /> {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn-si" onClick={() => this.peticionDelete()}>
                Si
              </button>
              <button
                className="btn-no"
                onClick={() => this.setState({ modalEliminar: false })}
              >
                No
              </button>
            </ModalFooter>
          {/* </div> */}
        </Modal>
        {/* <form className="form-group">
          <label htmlFor="id">ID</label>
          <input
            className="form-control"
            type="text"
            name="id"
            id="id"
            readOnly
            onChange={this.handleChange}
            value={form ? form.id : this.state.data.length + 1}
          />
          <br />
          <label htmlFor="nombre">Nombre</label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            id="nombre"
            onChange={this.handleChange}
            value={form ? form.nombre : ""}
          />
          <br />
          <label htmlFor="descripcion">Descripción</label>
          <input
            className="form-control"
            type="text"
            name="descripcion"
            id="descripcion"
            onChange={this.handleChange}
            value={form ? form.descripcion : ""}
          />
          <br />
          <label htmlFor="valorUnitario">Valor Unitario</label>
          <input
            className="form-control"
            type="text"
            name="valorUnitario"
            id="valorUnitario"
            onChange={this.handleChange}
            value={form ? form.valorUnitario : ""}
          />
          <br />
          <label htmlFor="estado">Estado</label>
          <select
            className="form-control"
            id="estado"
            name="estado"
            onChange={this.handleChange}
            value={form ? form.estado : ""}
          >
            <option value="Disponible">Disponible</option>
            <option value="No disponible">No disponible</option>
          </select>
        </form> */}
        {/* <div>
          {this.state.tipoModal === "insertar" ? (
            <button
              className="btn-insertar"
              onClick={() => this.peticionPost()}
            >
              Insertar
            </button>
          ) : (
            <button
              className="btn-actualizar"
              onClick={() => this.peticionPut()}
            >
              Actualizar
            </button>
          )}
        </div> */}
      </div>
    );
  }
}

export default TableProductos;
