import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/css-productos/FormProductos.scss";
import ilustracion from "../assets/images/productos.svg";
import Swal from "sweetalert2";

const url = Global.baseURL;

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

  modalError = () => {
    Swal.fire({
      html: "Debe diligenciar todos los campos",
      // timer: 7000,
      // timerProgressBar: true,
      icon: "warning",
      confirmButtonColor: "#173e63",
    });
  };

  handleOnclick = () => {
    const isValid = this.state.form?.nombre !== '' && this.state.form?.descripcion !== '' && this.state.form?.valorUnitario !== '' ;
    if (isValid) {
      this.peticionPost();
    } else {
      this.modalError();
    }
  }

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
                <option>Seleccionar ...</option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
              </select>
            </div>
            <button
              className="btn-guardar"
              type="submit"
              onClick={this.handleOnclick}
            >
              Guardar
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
