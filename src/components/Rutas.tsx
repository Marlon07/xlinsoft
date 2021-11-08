import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Error404 from '../pages/Error404';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import MaestroProductos from '../pages/MaestroProductos';
import MaestroVentas from '../pages/MaestroVentas';
import Productos from '../pages/Productos';
import Usuarios from '../pages/Usuarios';
import Ventas from '../pages/Ventas';

const Rutas = () => {
    return (
        <div>
            <Router>
                <switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/inicio" component={Inicio}/>
                    <Route exact path="/productos" component={Productos}/>
                    <Route exact path="/maestro-productos" component={MaestroProductos}/>
                    <Route exact path="/ventas" component={Ventas}/>
                    <Route exact path="/maestro-ventas" component={MaestroVentas}/>
                    <Route exact path="/usuarios" component={Usuarios}/>
                    {/* <Route path='*' component={Error404}/> */}
                </switch>
            </Router>
        </div>
    )
}

export default Rutas;
