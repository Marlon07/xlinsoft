import React from 'react'
import * as Icon from 'react-feather'
import Inicio from '../pages/Inicio';

const Contenido = () => {
    return (
        <div>
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
                <div className="content">
                    <Inicio />
                </div>
            </div>
        </div>
    )
}

export default Contenido
