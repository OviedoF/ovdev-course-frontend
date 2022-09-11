import React, { useState, useEffect } from "react";
import styles from "./HeroAuth.module.scss";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";

export default function HeroAuth() {
  const [activeRegisterForm, setActiveRegisterForm] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.selection}>
        <div
          className={`${styles.selection_option} ${activeRegisterForm ? styles.option_active : ''}`}
          onClick={() => setActiveRegisterForm(true)}
        >
          Registrarse
        </div>

        <div
          className={`${styles.selection_option} ${!activeRegisterForm ? styles.option_active : ''}`}
          onClick={() => setActiveRegisterForm(false)}
        >
          <p>Ingresar</p>
        </div>
      </div>

      {activeRegisterForm ? <RegisterForm setActiveRegisterForm={setActiveRegisterForm}/> : <LoginForm />}
    </div>
  );
}


