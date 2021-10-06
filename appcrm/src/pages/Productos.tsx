import React from 'react'
import Menu from '../components/Menu'
import * as Icon from 'react-feather'

const Productos = () => {
    return (
        <div>
            <Menu/>
            {/* main */}
            <div className="main">
                <div className="topbar">
                    <div className="user">
                        <Icon.User />
                    </div>
                </div>
                {/* Contenido */}
                <div className="content">
                    <h1>Registrar Producto</h1>
                </div>
            </div>
        </div>
    )
}

export default Productos
