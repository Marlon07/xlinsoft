import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import '../assets/css/Menu.scss';

const Menu = () => {
    return (
        <div className="container">
            <nav className="navegacion">
                <ul>
                    <li>
                        <NavLink exact to="/inicio" activeClassName="active">
                            <span className="icon"></span>
                            <span className="title">Xlinsoft</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/inicio" activeClassName="active">
                            <span className="icon"><Icon.Home /></span>
                            <span className="title">Inicio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/productos" activeClassName="active">
                            <span className="icon"><Icon.Package /></span>
                            <span className="title">Productos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/ventas" activeClassName="active">
                            <span className="icon"><Icon.ShoppingBag /></span>
                            <span className="title">Ventas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/usuarios" activeClassName="active">
                            <span className="icon"><Icon.User /></span>
                            <span className="title">Usuarios</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
