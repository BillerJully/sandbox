import React from "react";

import styles from "./Auth.module.css";

const Login: React.FC = () => {
  return (
    <section className={styles.authContainer}>
      <h2 className={styles.authTitle}>Авторизация</h2>
      <form className={styles.authForm} action="">
        <div className={styles.authForm_container}>
          <label className={styles.authForm_Label} htmlFor="">
            <input
              className={styles.authForm_Input}
              type="text"
              placeholder="Email"
            />
          </label>
        </div>
        <div className={styles.authForm_container}>
          <label className={styles.authForm_Label} htmlFor="">
            <input
              className={styles.authForm_Input}
              type="password"
              placeholder="Password"
            />
          </label>
        </div>
        <button className={styles.authForm_button}>Войти</button>
      </form>
      <div className={styles.authNotification}>
        <p className={styles.authNotification_text}>
          Еще нет аккаунта?{" "}
          <span>
            <a className={styles.authNotification_link} href="">
              Зарегистрироваться
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
