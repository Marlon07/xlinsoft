import React from 'react'
import Menu from '../components/Menu'
import * as Icon from 'react-feather'
import logo from '../assets/images/reg_ventas.svg';
import "../assets/css/Reg_ventas.scss"
<<<<<<< HEAD
import { Formik, Form } from 'formik';
import ProfileSchema from './ProfileSchema';
import Global from "../Global";
//import axios from "axios";

const url = Global.ventasURL;
//, Field, ErrorMessage
=======
import { Formik, Form, Field, ErrorMessage } from 'formik';
>>>>>>> origin/development

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
<<<<<<< HEAD
                            validationSchema={ProfileSchema}

                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));                                             
                                const axios = require('axios')
                                try {
                                axios.post(url, {
                                    vendedor: values.vendedor,
                                    valorTotal: values.valorTotal,
                                    precioUnitario: values.precioUnitario,
                                    referenciaProducto: values.referenciaProducto,
                                    cantidad: values.cantidad,
                                    identificacion: values.identificacion,
                                    nombre: values.nombre
                                    })
                                }
                                catch (error) {
                                    console.log('Error...')
                                }
                                setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {({ values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <Form onSubmit={handleSubmit} className="formulario">
                                    <div className="col-1">
                                    <label className="label">Vendedor</label>
                                    {/* <label htmlFor="fullnamme">Fullname</label> */}
                                    <input
                                        className="input"
                                        type="vendedor" 
                                        name="vendedor"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.vendedor}
                                    />
                                    {errors.vendedor && touched.vendedor && errors.vendedor}
                                   
                                    <label className="label">Precio Unitario</label>
                                    {/* <label htmlFor="fullnamme">Fullname</label> */}
                                    <input
                                        className="input"
                                        type="precioUnitario" 
                                        name="precioUnitario"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.precioUnitario}
                                        placeholder="$"
                                    />
                                    {errors.precioUnitario && touched.precioUnitario && errors.precioUnitario}
                                   
                                    <label className="label">Referencia Producto</label>
                                    {/* <label htmlFor="fullnamme">Fullname</label> */}
                                    <input
                                        className="input"
                                        type="referenciaProducto" 
                                        name="referenciaProducto"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.referenciaProducto}
                                    />
                                    {errors.referenciaProducto && touched.referenciaProducto && errors.referenciaProducto}
                                    
                                    <label className="label">Cantidad</label>
                                    {/* <label htmlFor="fullnamme">Fullname</label> */}
                                    <input
                                        className="input"
                                        type="cantidad" 
                                        name="cantidad"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cantidad}
                                        placeholder = "$"
                                    />
                                    {errors.cantidad && touched.cantidad && errors.cantidad}
                                    </div>

                                    <div>
                                    <label className="label">Valor Total</label>
                                    {/* <label htmlFor="fullnamme">Fullname</label> */}
                                    <input
                                        className="input"
                                        type="valorTotal" 
                                        name="valorTotal"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.valorTotal}
                                    />
                                    {errors.valorTotal && touched.valorTotal && errors.valorTotal}

                                    <h4>Datos del Cliente</h4>
                                    
                                    <label className="label">Identificación</label>
                                    {/* <label htmlFor="fullnamme">Fullname</label> */}
                                    <input
                                        className="input"
                                        type="identificacion" 
                                        name="identificacion"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.identificacion}
                                    />
                                    {errors.identificacion && touched.identificacion && errors.identificacion}
                                    
                                    <label className="label">Nombre</label>
                                    {/* <label htmlFor="fullnamme">Fullname</label> */}
                                    <input
                                        className="input"
                                        type="nombre" 
                                        name="nombre"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nombre}
                                    />
                                    {errors.nombre && touched.nombre && errors.nombre}
                                    </div>
    
                                    
                                    {/* <div className="col-1">
=======
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
>>>>>>> origin/development
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
<<<<<<< HEAD
                                    </div> */}
                                    <div>
                                        <button className="btn-guardar" type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? 'Guardando' : 'Guardar'}
                                        </button>
                                        <button className="btn-cancelar" type="reset" disabled={isSubmitting}>
                                            {isSubmitting ? 'Cancelando' : 'Cancelar'}
=======
                                    </div>
                                    <div>
                                        <button className="btn-guardar" type="submit" disabled={isSubmitting}>
                                            Guardar
                                        </button>
                                        <button className="btn-cancelar" type="reset" disabled={isSubmitting}>
                                            Cancelar
>>>>>>> origin/development
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



