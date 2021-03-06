import React from 'react'
import Menu from '../components/Menu'
import * as Icon from 'react-feather'
import logo from '../assets/images/reg_ventas.svg';
import "../assets/css/Reg_ventas.scss"
import { Formik, Form } from 'formik';
import ProfileSchema from './ProfileSchema';
import Global from "../Global";
//import axios from "axios";

const url = Global.ventasURL;
//, Field, ErrorMessage

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
                                    
                                    <label className="label">Identificaci??n</label>
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
                                    <div>
                                        <button className="btn-guardar" type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? 'Guardando' : 'Guardar'}
                                        </button>
                                        <button className="btn-cancelar" type="reset" disabled={isSubmitting}>
                                            {isSubmitting ? 'Cancelando' : 'Cancelar'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <img className="img_reg_ventas" src={logo} alt="Ilustraci??n Venta" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ventas



