import React from "react";

import styles from "./Auth.module.css";

const Login: React.FC = () => {
  return (
    <section className={styles.authContainer}>
      <h2 className={styles.authTitle}>Регистрация</h2>
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
        <div className={styles.authForm_container}>
          <label className={styles.authForm_Label} htmlFor="">
            <input
              className={styles.authForm_Input}
              type="password"
              placeholder="Confirm password"
            />
          </label>
        </div>
        <button className={styles.authForm_button}>Зарегистрироваться</button>
      </form>
      <div className={styles.authNotification}>
        <p className={styles.authNotification_text}>
          Уже есть аккаунт?{" "}
          <span>
            <a className={styles.authNotification_link} href="">
              Войти
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
