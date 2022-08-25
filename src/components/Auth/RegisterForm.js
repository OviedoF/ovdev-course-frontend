import React from "react";
import clipPathAnimations from "../../animations/clipPath";

const RegisterForm = () => {
  return (
    <form 
        className="form_design" 
        style={clipPathAnimations.appearFromTopRight}
    >

      <h3>¡Empieza hoy!</h3>

      <label htmlFor="email">Ingrese su email</label>
      <input type="text" name="email" id="email" />

      <label htmlFor="password">Ingrese su contraseña</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="confirmPassword">Confirme su contraseña</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />

      <button type="submit">Registrarse</button>

    </form>
  );
};

export default RegisterForm;
