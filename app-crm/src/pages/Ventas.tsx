import React from 'react'
import Menu from '../components/Menu'
import * as Icon from 'react-feather'

const Ventas = () => {
    return (
        <div>
            <Menu/>
            {/* main */}
            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <Icon.Menu />
                    </div>
                    <div className="user">
                        <Icon.User />
                    </div>
                </div>
                {/* Contenido */}
                <div className="content">
                    <h1>Registrar Venta</h1>
                </div>
            </div>
        </div>
    )
}

export default Ventas



