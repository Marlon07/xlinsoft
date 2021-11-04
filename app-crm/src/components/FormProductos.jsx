import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/css-productos/FormProductos.scss";
import ilustracion from "../assets/images/productos.svg";

const url = Global.baseURL;

const initialForm = {
  nombre: "",
  descripcion: "",
  valorUnitario: "",
  estado: "",
};

class FormProductos extends Component {
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
        <div className="contenedor">
          <form id="form1" className="form-group">
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
              required
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
              required
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
              required
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
                required
              >
                <option>Seleccionar ...</option>nombre
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
              </select>
            </div>
            <button
              className="btn-guardar"
              type="submit"
              onClick={() => this.peticionPost()}
            >
              Guardar
            </button>

            <button type="reset">
              Cancelar
            </button>
          </form>
          <img
            className="img-productos"
            src={ilustracion}
            alt="Ilustración Productos"
          />
        </div>
      </div>
    );
  }
}

export default FormProductos;
