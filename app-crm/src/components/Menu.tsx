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
                    <li className="list">
                        <NavLink to="/inicio">
                            <span className="icon"><Icon.Home /></span>
                            <span className="title">Inicio</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <Link to="/productos">
                            <span className="icon"><Icon.Package /></span>
                            <span className="title">Productos</span>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to="/ventas">
                            <span className="icon"><Icon.ShoppingBag /></span>
                            <span className="title">Ventas</span>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to="/usuarios">
                            <span className="icon"><Icon.User /></span>
                            <span className="title">Usuarios</span>
                        </Link>
                    </li>
                    <li className="list">
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
