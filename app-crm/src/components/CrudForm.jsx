import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/MaestroProductos.scss";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";

const url = Global.urlproductos;

class CrudForm extends Component {
  state = {
    data: [],
    form: {
      id: "",
      nombre: "",
      descripcion: "",
      valorUnitario: "",
      estado: "",
      tipoModal: "",
    },
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
    axios.put(url + this.state.form.id, this.state.form).then((response) => {
      this.cargarProductos();
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

  // componentDidMount() {
  //   this.peticionPost();
  // }

  render() {
    const { form } = this.state;
    return (
      <div>
        <form className="form-group">
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
        </form>
        <div>
          <button className="btn-insertar" onClick={() => this.peticionPost()}>
            Guardar
          </button>
        </div>
      </div>
    );
  }
}

export default CrudForm;
