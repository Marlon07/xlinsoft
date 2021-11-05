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
    tablaVentas: [],
    ventas: [], 
    busqueda: "",
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

  cargarVentas=async()=>{
    await axios.get(url)
    .then(response=>{
      this.setState({ tablaVentas: response.data });
      this.setState({ ventas: response.data });
    }).catch(error=>{
      console.log(error);
    })
  }

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

  handleChange=e=>{
    this.setState({ busqueda: e.target.value });
    this.filtrar(e.target.value);
  }

  filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=this.state.tablaVentas.filter((elemento)=>{
      if (terminoBusqueda === "") {
        return elemento;
      }else if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.vendedor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.referenciaProducto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase().length > 5)
      || elemento.identificacion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase().length > 5)
      || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
      return false;
    });
    this.setState({ ventas: resultadosBusqueda });
  }

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

          <input
            className="inp-buscar"
            type="search"
            value={this.state.busqueda}
            
            placeholder="Búsqueda por (ID Vendedor Referencia Identificación ó Comprador)"
            onChange={this.handleChange}
          />
      
          <NavLink
            to="/ventas"
            activeClassName="active"
          >
            <span className="btn-registrar">Registrar Nuevo</span>
          </NavLink>
        </div>
        
        <div className="table-responsive">
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
              {this.state.ventas && 
              this.state.ventas.map((venta)=>(
                <tr key={venta.id}>
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
              ))}
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
      </div>
    );
  } 
}

export default TableVentas;
