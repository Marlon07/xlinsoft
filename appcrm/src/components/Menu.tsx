import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Router>
                <switch>
                    <Route exact path="/productos">
                        <h3>Productos</h3>
                    </Route>
                    <Route exact path="/maestro-productos">
                        <h3>Maestro Productos</h3>
                    </Route>
                    <Route exact path="/ventas">
                        <h3>Ventas</h3>
                    </Route>
                    <Route exact path="/maestro-ventas">
                        <h3>Maestro Ventas</h3>
                    </Route>
                    <Route exact path="/usuarios">
                        <h3>Usuarios</h3>
                    </Route>
                </switch>
            </Router>
        </div>
    )
}

export default Menu;
