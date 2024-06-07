import React from 'react'
import "./formulario.css"

const Forrmulario = ({ datosForm, handleChageInput, handleSubmitForm }) => {

  return (

    <div className='formulario'>

     <form  onSubmit={handleSubmitForm}>
        <label>Nombre</label>
        <input type="text"  name="nombre" value={datosForm.nombre} onChange={handleChageInput}/>

        <label>Telefono</label>
        <input type="text"  name="telefono" value={datosForm.telenono} onChange={handleChageInput}/>

        <label>Email</label>
        <input type="email"  name="email" value={datosForm.email} onChange={handleChageInput}/>

        <button type="submit">Enviar orden</button>
    </form>

    </div>

  )
}

export default Forrmulario