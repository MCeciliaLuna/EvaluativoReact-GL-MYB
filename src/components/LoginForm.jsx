import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginStore from "../store/loginStore";
import styles from "../components/login.module.css";

const LoginForm = () => {

  const login = loginStore((state) => state.login);
  const setLogin = loginStore((state) => state.setLogin);
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const navigate = useNavigate()

  const submitData = () => {

    if (usernameRef.current.value && emailRef.current.value) {
      setLogin(true);
      sessionStorage.setItem("userName", usernameRef.current.value);
      sessionStorage.setItem("userEmail", emailRef.current.value);
    } else {
      toast.error("Ingresá los datos correspondientes");
    }
  };

  if (login === true) {
    navigate("/adminpage")
  }

  return (
    <div className={styles.fondo}>
      <Toaster />
      <h1>Iniciar sesión</h1>
      <form>
        <input
          type="text"
          name="username"
          id="input-username"
          ref={usernameRef}
          required
        />
        <input
          type="email"
          name="email"
          id="input-email"
          ref={emailRef}
          required
        />
        <button type="button" onClick={() => submitData()}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
