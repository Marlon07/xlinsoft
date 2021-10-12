import React, { useState, useEffect } from 'react'

const initialForm = {
    nombre: "",
    descripcion: "",
    valorUnitario: "",
    estado: "",
    id: null,
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit} : any ) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e:any) => { 
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e:any) => { 
        e.preventDefault()

        if(!form.nombre || !form.descripcion || !form.valorUnitario || !form.estado){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form)
        }else {
            updateData(form)
        }

        handleReset(e)
    };

    const handleReset = (e:any) => { 
        setForm(initialForm)
        setDataToEdit(null)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.nombre} />
                <input type="text" name="descripcion" placeholder="Descripción" onChange={handleChange} value={form.descripcion} />
                <input type="number" name="valorUnitario" placeholder="Valor Unitario" onChange={handleChange} value={form.valorUnitario} />
                <input type="text" name="estado" placeholder="Estado" onChange={handleChange} value={form.estado} />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm
