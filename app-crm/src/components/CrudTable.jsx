import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "../assets/css/MaestroProductos.scss";
import * as Icon from "react-feather";

const url = Global.urlproductos;

class CrudTable extends Component {
  state = {
    data: [],
  };

  cargarProductos = () => {
    axios.get(url).then((response) => {
      // console.log(res.data);
      this.setState({ data: response.data });
    });
  };

  componentDidMount() {
    this.cargarProductos();
  }

  render() {
    return (
      <div>
        <div>
          <span className="ico-buscar"><Icon.Search /></span>
          <input className="inp-buscar" type="text" placeholder="Buscar" />
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
                    <button className="btn-editar">
                      <Icon.Edit2 />
                    </button>
                    <button className="btn-eliminar">
                      <Icon.Trash2 />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CrudTable;
