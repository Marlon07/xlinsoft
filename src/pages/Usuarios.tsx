import React from 'react'
import Menu from '../components/Menu'
import * as Icon from 'react-feather'
import TableUsuarios from '../components/TableUsuarios'


const Usuarios = () => {
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
                    <h1>Gestionar Usuarios</h1>
                    <TableUsuarios/>
                </div>
            </div>
        </div>
    )
}

export default Usuarios
