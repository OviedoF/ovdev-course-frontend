import React, { useState } from "react";
import clipPathAnimations from "../../animations/clipPath";
import axios from "axios";
import {
  activeScreen,
  desactiveScreen,
} from "../../actions/screensActive.actions";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth.actions";

const RegisterForm = ({setActiveRegisterForm}) => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(activeScreen("isLoading"));
    dispatch(desactiveScreen("successMessage"));
    dispatch(desactiveScreen("errorMessage"));

    axios
      .post(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/signup`, form)
        .then((res) => {
          dispatch(desactiveScreen("isLoading"));
          dispatch(activeScreen("successMessage"));
          setActiveRegisterForm(false);
        })
        .catch((err) => {
          console.log(err);
          dispatch(desactiveScreen("isLoading"));
          dispatch(activeScreen("errorMessage", err.response.data.message));
        });
  };

  return (
    <form
      className="form_design"
      onSubmit={(e) => handleSubmit(e)}
    >

      <label htmlFor="name">Ingrese su nombre o nombre de usuario</label>
      <input type="text" name="name" id="name" onChange={(e) => handleRegister(e)}/>

      <label htmlFor="email">Ingrese su email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => handleRegister(e)}
      />

      <label htmlFor="password">Ingrese su contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => handleRegister(e)}
      />

      <label htmlFor="confirmPassword">Confirme su contraseña</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={(e) => handleRegister(e)}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
