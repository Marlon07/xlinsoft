import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'
import '../assets/css/Menu.scss';
import LogoMenu from '../assets/images/logo-menu.svg';
// import Inicio from '../pages/Inicio';
// import Usuarios from '../pages/Usuarios';

const Menu = () => {

    let list = document.querySelectorAll('.navegacion li');
    function activeLink(this: any) {
        list.forEach((item) =>
            item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
        item.addEventListener('click', activeLink));

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
                    <li className="active">
                        <Link to="/inicio">
                            <span className="icon"><Icon.Home /></span>
                            <span className="title">Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos">
                            <span className="icon"><Icon.Package /></span>
                            <span className="title">Productos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ventas">
                            <span className="icon"><Icon.ShoppingBag /></span>
                            <span className="title">Ventas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuarios">
                            <span className="icon"><Icon.User /></span>
                            <span className="title">Usuarios</span>
                        </Link>
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
