import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  activeScreen,
  desactiveScreen,
} from "../../actions/screensActive.actions";
import { getUserByToken } from "../../helpers/token.helper";
import { login } from "../../actions/auth.actions";
import clipPathAnimations from "../../animations/clipPath";

const LoginForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const userFinded = await getUserByToken();

    if (!userFinded) return;

    await dispatch(
      login({
        ...userFinded,
        token: localStorage.getItem("x-access"),
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(activeScreen("isLoading"));
    dispatch(desactiveScreen("successMessage"));
    dispatch(desactiveScreen("errorMessage"));

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/signin`, form)
        .then((res) => {
          console.log(res), localStorage.setItem("x-access", res.data.token);
          localStorage.setItem("access-timestamp", Math.round(new Date().getTime()/1000));
          handleLogin();
          dispatch(desactiveScreen("isLoading"));
          dispatch(activeScreen("successMessage"));
        })
        .catch((err) => {
          dispatch(desactiveScreen("isLoading"));
          dispatch(activeScreen("errorMessage", err.response.data.message));
        });
  };

  return (
    <form
      action=""
      className="form_design appearFromTopAnimation"
      onSubmit={(e) => handleSubmit(e)}
      style={clipPathAnimations.appearFromTopRight}
    >

      <label htmlFor="email">Ingrese su correo electrónico</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="password">Ingrese su contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => handleChange(e)}
      />

      <button type="submit">Ingresar</button>
      
    </form>
  );
};

export default LoginForm;
