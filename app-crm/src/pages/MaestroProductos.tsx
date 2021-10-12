import React from 'react'
import * as Icon from 'react-feather'
import CrudTable from '../components/CrudTable';
import Menu from '../components/Menu';

const MaestroProductos = () => {
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
                    <h1>Registro de Productos</h1>
                    <CrudTable/>
                <p></p>
                </div>
            </div>
        </div>
    )
}

export default MaestroProductos
