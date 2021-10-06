import React from 'react'
// import Menu from '../components/Menu'
import '../assets/css/Inicio.scss';
import * as Icon from 'react-feather'
import Menu from '../components/Menu';


const Inicio = () => {
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
                    <h1>Inicio</h1>
                </div>
            </div>
        </div>
    )
}

export default Inicio
