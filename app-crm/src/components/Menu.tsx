import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import '../assets/css/Menu.scss';
import LogoMenu from '../assets/images/logo-menu.svg';
// import Inicio from '../pages/Inicio';
// import Usuarios from '../pages/Usuarios';

const Menu = () => {

    // const list = document.querySelectorAll('.list');
    // function activeLink(this: any) {
    //     list.forEach((item) =>
    //         item.classList.remove('active'));
    //     this.classList.add('active');
    // }
    // list.forEach((item) =>
    //     item.addEventListener('click',activeLink));

    return (
        <div className="container">
            <nav className="navegacion">
                <ul>
                    <li>
                        <Link to="">
                            <span className="icon"><img src={LogoMenu} className="logo-menu" alt="logo" /></span>
                            <span className="title">Xlinsoft</span>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/inicio" activeClassName="active">
                            <span className="icon"><Icon.Home /></span>
                            <span className="title">Inicio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos" activeClassName="active">
                            <span className="icon"><Icon.Box /></span>
                            <span className="title">Registrar Producto</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ventas" activeClassName="active">
                            <span className="icon"><Icon.ShoppingCart /></span>
                            <span className="title">Registrar Venta</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/maestro-productos" activeClassName="active">
                            <span className="icon"><Icon.Package /></span>
                            <span className="title">Registros de Productos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/maestro-ventas" activeClassName="active">
                            <span className="icon"><Icon.ShoppingBag /></span>
                            <span className="title">Registros de Ventas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/usuarios" activeClassName="active">
                            <span className="icon"><Icon.User /></span>
                            <span className="title">Usuarios</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="icon"><Icon.LogOut /></span>
                            <span className="title">Salir</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu
