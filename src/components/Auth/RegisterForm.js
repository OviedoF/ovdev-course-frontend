import React, { useState } from 'react';
import clipPathAnimations from "../../animations/clipPath";
import axios from 'axios';

const RegisterForm = () => {
  const [form, setForm] = useState({});

  const handleRegister = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`https://ovdevcourses-api.herokuapp.com/api/auth/signup`, form)
    .then((res) => {
      console.log('registrado');
    })
    .catch((err) => {
      console.error('no registrado');
    });
  }

  return (
    <form 
        className="form_design" 
        style={clipPathAnimations.appearFromTopRight}
        onSubmit={(e) => handleSubmit(e)}
    >

      <h3>¡Empieza hoy!</h3>

      <label htmlFor="email">Ingrese su email</label>
      <input type="text" name="email" id="email" onChange={(e) => handleRegister(e)}/>

      <label htmlFor="password">Ingrese su contraseña</label>
      <input type="password" name="password" id="password" onChange={(e) => handleRegister(e)}/>

      <label htmlFor="confirmPassword">Confirme su contraseña</label>
      <input type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => handleRegister(e)}/>

      <button type="submit">Registrarse</button>

    </form>
  );
};

export default RegisterForm;
