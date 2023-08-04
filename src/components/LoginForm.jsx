import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import loginStore from "../store/loginStore";
import styles from "../components/login.module.css";

const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // aqui puedo hacer las verificaciones.
  //   // verifico que ambos campos no estén vacíos.
  //   if (username.trim() !== '' && password.trim() !== '') {
  //     // loginStore.setLogin(true); // Actualiza el estado global para indicar que el usuario está autenticado
  //   } else {
  //     alert('Por favor, ingresa un usuario y contraseña válidos.');
  //   }
  // };

  const login = loginStore((state) => state.login);
  const setLogin = loginStore((state) => state.setLogin);
  const usernameRef = useRef(null)
  const emailRef = useRef(null)

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
    return <Navigate to="/adminpage" />;
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
          //value={username}
          //onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="input-email"
          ref={emailRef}
          required
          //value={password}
          //onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => submitData()}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
