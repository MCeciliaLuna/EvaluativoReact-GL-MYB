import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginStore from "../store/loginStore";
import styles from "../styles/Login.module.css";
import { TextField } from "@mui/material";

const Login = () => {
  const login = loginStore((state) => state.login);
  const setLogin = loginStore((state) => state.setLogin);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const usernameRegex = new RegExp("^[^\\s]+$");
  const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

  const submitData = () => {
    if (usernameRef.current.value && emailRef.current.value) {
      if (
        usernameRegex.test(usernameRef.current.value) &&
        emailRegex.test(emailRef.current.value)
      ) {
        setLogin(true);
        sessionStorage.setItem("userName", usernameRef.current.value);
        sessionStorage.setItem("userEmail", emailRef.current.value);
      } else {
        toast.error("Ingresá correctamente los datos");
      }
    } else {
      toast.error("Ingresá los datos solicitados");
    }
  };

  if (login === true) {
    navigate("/home");
  }

  return (
    <section id="login-form" className={styles.section}>
      <div className={styles.cover}></div>
      <Toaster />
      <h2 className={styles.title}>Ingresá</h2>
      <form className={styles.form}>
        <TextField
          required
          id="standard-basic"
          variant="standard"
          label="Nombre de usuario"
          inputRef={usernameRef}
          inputProps={{ maxLength: "15" }}
        />
        <br />
        <TextField
          required
          id="standard-basic"
          variant="standard"
          label="Email"
          inputRef={emailRef}
          inputProps={{ maxLength: "30" }}
        />
        <button
          className={styles.button}
          type="button"
          onClick={() => submitData()}
        >
          Iniciar sesión
        </button>
      </form>
    </section>
  );
};

export default Login;
