import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/css-ventas/TableVentas.scss";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Swal from "sweetalert2";

const url = Global.ventasURL;
// const [ventas, setUsuarios]= useState([]);
// const [tablaVentas, setTablaUsuarios]= useState([]);
// const [busqueda, setBusqueda]= useState("");

class TableVentas extends Component {
  state = {
    tablaVentas: [],
    ventas: [], 
    busqueda: "",
    modalEliminar: false,
    modalEditar: false,
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

  cargarVentas=()=>{
    axios
      .get(url)
      .then(response=>{
        this.setState({ tablaVentas: response.data });
        this.setState({ ventas: response.data });
      }).catch(error=>{
        console.log(error);
      })
  }

  // ACTUALIZAR
  peticionPut = () => {
    axios
      .put(url + "/" + this.state.form.id, this.state.form)
      .then((response) => {
        this.setState({ modalEditar: false });
        this.cargarVentas();
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
  // filtrar=(terminoBusqueda)=>{
  //   var resultadosBusqueda=this.state.tablaVentas.filter((elemento)=>{
  //     if (terminoBusqueda === "") {
  //       return elemento;
  //     }else if( elemento.vendedor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
  //     || elemento.referenciaProducto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
  //     || elemento.identificacion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
  //     || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
  //     ){
  //       return elemento;
  //     }
  //     return false;
  //   });
  //   this.setState({ ventas: resultadosBusqueda });
  // }
  filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=this.state.tablaVentas.filter((elemento)=>{
      //this.isAlphaNumeric(terminoBusqueda)
      if (terminoBusqueda === "") {
        return elemento; 
      }
      else if(this.isAlphaNumeric(terminoBusqueda) === true){
        if(elemento.referenciaProducto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return elemento;
        }
      }else if((elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())))
      {
        return elemento;
      }else if(terminoBusqueda.length === 10){
        if(elemento.identificacion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return elemento;
        }
      }else if(elemento.vendedor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
      return false;
    });
    this.setState({ ventas: resultadosBusqueda });
  }

  isAlphaNumeric(str) {
    var code, i, len, num, le;
  
    for (i = 0, len = str.length, num=0, le=0; i < len; i++) {
      code = str.charCodeAt(i);
      if ((code > 47 && code < 58) //&& // numeric (0-9)
          //!(code > 64 && code < 91) && // upper alpha (A-Z)
          //!(code > 96 && code < 123)
          ) { // lower alpha (a-z)
            num = num + 1;  
      }
      if((code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123)){
        le = le + 1;
      }
    }
    //alert("termino " + "Numero " + num + " Letras " + le)
    
    //alert(num.toString());
    if(num>0 && le >0){
      //alert('Input is alphanumeric');
      return true;
    }else{
      return false;
    } 
  };

  modalEditar = () => {
    this.setState({ modalEditar: !this.state.modalEditar });
  };

  // useEffect(()=>{ 
  //   peticionGet();
  //   },[])

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
            placeholder="Búsqueda por (Vendedor Referencia Identificación (10 dig) ó Comprador)"
            onChange={this.handleChange}
          />
      
          <NavLink to="/ventas" activeClassName="active">
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
              this.state.ventas.map((venta, i)=>(
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
                      {new Intl.NumberFormat("es-ES").format(
                        venta.cantidad
                      )}
                    </td>

                    <td>{venta.identificacion}</td>
                    <td>{venta.nombre}</td>
                    
                    <td>
                      <button
                        className="btn-editar"
                        onClick={() => {
                          this.seleccionarVenta(venta)
                          this.modalEditar();
                        }}
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
            <ModalHeader>Eliminar Venta</ModalHeader>
            <span className="btn-trash">
              <Icon.Trash2 size={40} />
            </span>
            <ModalBody>
              Está seguro que desea eliminar la venta {form && form.id}
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
            <ModalHeader>Editar Venta</ModalHeader>

            <ModalBody className="modalEditar">
            <div className="contenedor">
              <label className="label" htmlFor="vendedor">
                Vendedor
              </label>
              <input
                className="input"
                type="text"
                name="vendedor"
                id="vendedor"
                onChange={this.handleChange}
                value={form ? form.vendedor : ""}
              />

              <label className="label" htmlFor="valorTotal">
                Valor Total
              </label>
              <input
                className="input"
                type="text"
                name="valorTotal"
                id="valorTotal"
                placeholder="$"
                onChange={this.handleChange}
                value={form ? form.valorTotal : ""}
              />

              <label className="label" htmlFor="precioUnitario">
                Precio Unitario
              </label>
              <input
                className="input"
                type="text"
                name="precioUnitario"
                id="precioUnitario"
                placeholder="$"
                onChange={this.handleChange}
                value={form ? form.precioUnitario : ""}
              />

              <label className="label" htmlFor="referenciaProducto">
                Referencia Producto
              </label>
              <input
                className="input"
                type="text"
                name="referenciaProducto"
                id="referenciaProducto"
                onChange={this.handleChange}
                value={form ? form.referenciaProducto : ""}
              />

              <label className="label" htmlFor="cantidad">
                Cantidad
              </label>
              <input
                className="input"
                type="text"
                name="cantidad"
                id="cantidad"
                placeholder="$"
                onChange={this.handleChange}
                value={form ? form.cantidad : ""}
              />

              <label className="label" htmlFor="identificacion">
                Identificación
              </label>
              <input
                className="input"
                type="text"
                name="identificacion"
                id="identificacion"
                placeholder="$"
                onChange={this.handleChange}
                value={form ? form.identificacion : ""}
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
                value={form ? form.nombre : ""}
              />
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
      </div>
    );
  } 
}

export default TableVentas;
