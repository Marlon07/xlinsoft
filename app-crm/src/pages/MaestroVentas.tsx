import React from "react";
import * as Icon from "react-feather";
import CrudTable from "../components/TableVentas";
import Menu from "../components/Menu";
// import { Link } from 'react-router-dom';
// import Search from "../components/Search";
// import Barra from "../components/Barra";

const MaestroVentas = () => {
  return (
    <div>
      <Menu />
      {/* main */}
      <div className="main">
        <div className="topbar">
          <div className="user">
            <Icon.User />
          </div>
        </div>
        {/* Contenido */}
        <div className="content">
          <h1>Registro de Ventas</h1>
          <CrudTable />
        </div>
      </div>
    </div>
  );
};

export default MaestroVentas;
