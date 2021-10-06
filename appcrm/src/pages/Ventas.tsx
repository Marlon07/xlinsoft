import React from 'react'
import Menu from '../components/Menu'
import * as Icon from 'react-feather'
import logo from '../assets/images/logo_reg_ventas.svg';
import "../assets/css/Reg_ventas.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

                    <Formik
                        
                        //initialValues={{ vendedor: 'vendedor', valorTotal: 'valorTotal', precioUnitario: 'precioUnitario', referenciaProducto: 'referenciaProducto', cantidad: 'cantidad',  identificacion: 'identificacion', nombre: 'nombre' }}
                        initialValues={{ vendedor: '', valorTotal: '', precioUnitario: '', referenciaProducto: '', cantidad: '',  identificacion: '', nombre: '' }}
                        validate={values => {
                            const errors = {};
                            // if (!values.email) {
                            // errors.email = 'Required';
                            // } else if (
                            // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            // ) {
                            // errors.email = 'Invalid email address';
                            // }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
                        {({ isSubmitting }) => (
                            <Form>
                            <Field className="vendedor" type="vendedor" name="vendedor" />
                            <ErrorMessage name="vendedor" component="div" />
                            <Field className="valorTotal" type="valorTotal" name="valorTotal" />
                            <ErrorMessage name="valorTotal" component="div" />
                            <Field className="precioUnitario" type="precioUnitario" name="precioUnitario" />
                            <ErrorMessage name="precioUnitario" component="div" />
                            <Field className="referenciaProducto" type="referenciaProducto" name="referenciaProducto" />
                            <ErrorMessage name="referenciaProducto" component="div" />
                            <Field className="cantidad" type="cantidad" name="cantidad" />
                            <ErrorMessage name="cantidad" component="div" />
                            <Field className="identificacion" type="identificacion" name="identificacion" />
                            <ErrorMessage name="identificacion" component="div" />
                            <Field className="nombre" type="nombre" name="nombre" />
                            <ErrorMessage name="nombre" component="div" />
                            <button className="guardar" type="submit" disabled={isSubmitting}>
                                Guardar
                            </button>
                            <button className="cancelar" type="reset" disabled={isSubmitting}>
                                Cancelar
                            </button>
                            </Form>
                        )}
                        </Formik>
                        <div className = 'txt_vendedor'>
                            Vendedor    
                        </div>
                        <div className = 'txt_valorTotal'>
                            Valor Total    
                        </div>
                        <div className = 'txt_precioUnitario'>
                            Precio Unitario   
                        </div>
                        <div className = 'txt_referenciaProducto'>
                            Referencia Producto    
                        </div>
                        <div className = 'txt_cantidad'>
                            Cantidad   
                        </div>
                        <div className = 'txt_identificacion'>
                            Identificación    
                        </div>
                        <div className = 'txt_nombre'>
                            Nombre    
                        </div>
                        <div className = 'txt_datosCliente'>
                            Datos del Cliente  
                        </div>
                    
                    <img className="logo_reg_ventas" src={logo}/>
                </div>
            </div>
        </div>
    )
}

export default Ventas



