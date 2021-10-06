import React from 'react'
import Menu from '../components/Menu'
import * as Icon from 'react-feather'
import logo from '../assets/images/reg_ventas.svg';
import "../assets/css/Reg_ventas.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Ventas = () => {
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
                    <h1>Registrar Venta</h1>
                    <div className="contenedor">
                        <Formik
                            //initialValues={{ vendedor: 'vendedor', valorTotal: 'valorTotal', precioUnitario: 'precioUnitario', referenciaProducto: 'referenciaProducto', cantidad: 'cantidad',  identificacion: 'identificacion', nombre: 'nombre' }}
                            initialValues={{ vendedor: '', valorTotal: '', precioUnitario: '', referenciaProducto: '', cantidad: '', identificacion: '', nombre: '' }}
                            validate={values => {
                                // const errors = {};
                                // if (!values.vendedor) {
                                //     errors.vendedor = 'Required';
                                // } else if (
                                // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.vendedor)
                                // ) {
                                // errors.vendedor = 'Invalid email address';
                                // }
                                // return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="formulario">
                                    <div className="col-1">
                                        <label className="label">Vendedor</label>
                                        <Field className="input" type="vendedor" name="vendedor" />
                                        <ErrorMessage name="vendedor" component="div" />
                                        <label className="label">Precio Unitario</label>
                                        <Field className="input" type="precioUnitario" name="precioUnitario" placeholder="$"/>
                                        <ErrorMessage name="precioUnitario" component="div" />
                                        <label className="label">Referencia Producto</label>
                                        <Field className="input" type="referenciaProducto" name="referenciaProducto" />
                                        <ErrorMessage name="referenciaProducto" component="div" />
                                        <label className="label">Cantidad</label>
                                        <Field className="input" type="cantidad" name="cantidad" />
                                        <ErrorMessage name="cantidad" component="div" />
                                    </div>
                                    <div>
                                        <label className="label">Valor Total</label>
                                        <Field className="input" type="valorTotal" name="valorTotal" placeholder="$"/>
                                        <ErrorMessage name="valorTotal" component="div" />
                                        <h4>Datos del Cliente</h4>
                                        <label className="label">Identificación</label>
                                        <Field className="input" type="identificacion" name="identificacion" />
                                        <ErrorMessage name="identificacion" component="div" />
                                        <label className="label">Nombre</label>
                                        <Field className="input" type="nombre" name="nombre" />
                                        <ErrorMessage name="nombre" component="div" />
                                    </div>
                                    <div>
                                        <button className="btn-guardar" type="submit" disabled={isSubmitting}>
                                            Guardar
                                        </button>
                                        <button className="btn-cancelar" type="reset" disabled={isSubmitting}>
                                            Cancelar
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <img className="img_reg_ventas" src={logo} alt="Ilustración Venta" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ventas



