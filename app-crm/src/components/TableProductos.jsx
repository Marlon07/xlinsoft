import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/css-productos/TableProductos.scss";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";
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

  // const [usuarios, setUsuarios] = useState([]);
  // const [tablaUsaurios, setTablaUsuarios] = useState([]);
  // const [busqueda, setBusqueda] = useState("");

  cargarProductos = () => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        this.setState({ data: response.data });
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
          <ModalHeader>Eliminar Producto</ModalHeader>
          <span className="btn-trash">
            <Icon.Trash2 size={40} />
          </span>
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
            <button className="btn-si" onClick={() => this.peticionDelete()}>
              Si
            </button>
          </ModalFooter>
        </Modal>
        
      </div>
    );
  }
}

export default TableProductos;
