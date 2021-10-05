import React from 'react'
// import Menu from '../components/Menu'
import '../assets/css/Inicio.scss';
import * as Icon from 'react-feather'
import Menu from '../components/Menu';
import inicio from '../assets/images/inicio.svg';

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
                    <div className="card-principal">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laborum dolorum harum dicta hic
                            enim ducimus explicabo error ut, officiis, reprehenderit maxime. Consequuntur magnam dolores aut, odit
                            temporibus placeat enim enim ducimus explicabo error ut, officiis, reprehenderit maxime. Consequuntur magnam dolores aut, odit
                            temporibus placeat enim !</p>
                        <img src={inicio} className="svg-inicio" alt="ilustracion" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio
