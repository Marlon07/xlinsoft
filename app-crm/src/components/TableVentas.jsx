import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/css-ventas/TableVentas.scss";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = Global.ventasURL;

class TableVentas extends Component {
  state = {
    data: [],
    modalEliminar: false,
    form: {
     
      vendedor: "",
      valorTotal: "",
      precioUnitario: "",
      referenciaProducto: "",
      cantidad: "",
      identificacion: "",
      nombre: "",
      tipoModal: "",
    },
  };

  cargarVentas = () => {
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
        this.cargarVentas();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  seleccionarVenta = (venta) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: venta.id,
        vendedor: venta.vendedor,
        valorTotal: venta.valorTotal,
        precioUnitario: venta.precioUnitario,
        referenciaProducto: venta.referenciaProducto,
        cantidad: venta.cantidad,
        identificacion: venta.identificacion,
        nombre: venta.nombre,
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
    this.cargarVentas();
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
            to="/ventas"
            activeClassName="active"
            // onClick={() => {
            //   this.setState({ form: null, tipoModal: "insertar" });
            // }}
          >
            <span className="btn-registrar">Registrar Nuevo</span>
          </NavLink>
        </div>

        <table className="tab">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vendedor</th>
              <th>Valor Total</th>
              <th>Precio Unitario</th>
              <th>Referencia Producto</th>
              <th>Cantidad</th>
              <th>Identificacion</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((venta, i) => {
              return (
                <tr key={i}>
                  <td>{venta.id}</td>
                  <td>{venta.vendedor}</td>
                  <td>
                    &#36;{" "}
                    {new Intl.NumberFormat("es-ES").format(
                      venta.valorTotal
                    )}
                  </td>

                  <td>
                    &#36;{" "}
                    {new Intl.NumberFormat("es-ES").format(
                      venta.precioUnitario
                    )}
                  </td>

                  <td>{venta.referenciaProducto}</td>
                  
                  <td>
                    &#36;{" "}
                    {new Intl.NumberFormat("es-ES").format(
                      venta.cantidad
                    )}
                  </td>

                  <td>{venta.identificacion}</td>
                  <td>{venta.nombre}</td>
                  <td>
                    <button
                      className="btn-editar"
                      onClick={() => this.seleccionarVenta(venta)}
                    >
                      <Icon.Edit2 size={20} />
                    </button>
                    <button
                      className="btn-eliminar"
                      onClick={() => {
                        this.seleccionarVenta(venta);
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

export default TableVentas;
