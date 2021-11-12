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
    modalEliminar: false,
    form: {
      id_p: "",
      nombre: "",
      descripcion: "",
      valorUnitario: "",
      estado: "",
      // tipoModal: "",
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
    delete this.state.form.id_p;
    await axios
      .post("http://localhost:8080/api/products/add", this.state.form)
      .then((response) => {
        this.cargarProductos();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  modalSuccess = () => {
    Swal.fire({
      html: "Producto guardado satisfactoriamente",
      timer: 2000,
      timerProgressBar: true,
      icon: "success",
      confirmButtonColor: "#173e63",
    });
  };

  modalError = () => {
    Swal.fire({
      html: "Debe diligenciar todos los campos",
      timer: 3000,
      timerProgressBar: true,
      icon: "warning",
      confirmButtonColor: "#173e63",
    });
  };

  handleOnclick = () => {
    const isValid =
      this.state.form?.id !== "" &&
      this.state.form?.nombre !== "" &&
      this.state.form?.descripcion !== "" &&
      this.state.form?.valorUnitario !== "";
    if (isValid) {
      this.peticionPost();
      this.modalSuccess();
    } else {
      // this.setState({ modalEliminar: true });
      this.modalError();
      // alert('Hola');
    }
  };

  // UPDATE
  peticionPut = () => {
    axios.put(url + this.state.form.id_p, this.state.form).then((response) => {
      this.cargarProductos();
    });
  };

  seleccionarProducto = (producto) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id_p: producto.id_p,
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
    // const { form } = this.state;
    return (
      <div>
        <div className="contenedor">
          <form id="form1" className="form-group">
            <label className="label" htmlFor="id">
              ID
            </label>
            <input
              className="input"
              type="text"
              name="id"
              id="id"
              onChange={this.handleChange}
              // value={form ? form.nombre : ""}
            />

            <label className="label" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="input"
              type="text"
              name="nombre"
              id="nombre"
              onChange={this.handleChange}
              // value={form ? form.nombre : ""}
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
              // value={form ? form.descripcion : ""}
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
              // value={form ? form.valorUnitario : ""}
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
                // value={form ? form.estado : ""}
              >
                <option>Seleccionar ...</option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
              </select>
            </div>
            <button
              className="btn-guardar"
              type="button"
              onClick={() => this.handleOnclick()}
            >
              Guardar
            </button>
            <button className="btn-cancelar" type="reset">
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
