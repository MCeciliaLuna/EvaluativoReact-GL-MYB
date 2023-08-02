import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from 'react-router-dom';
import loginState from '../context/loginStore';

const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // aqui puedo hacer las verificaciones.
  //   // verifico que ambos campos no estén vacíos.
  //   if (username.trim() !== '' && password.trim() !== '') {
  //     // loginState.setLogin(true); // Actualiza el estado global para indicar que el usuario está autenticado
  //   } else {
  //     alert('Por favor, ingresa un usuario y contraseña válidos.');
  //   }
  // };

  const login = loginState((state) => state.login);
  const setLogin = loginState((state) => state.setLogin);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const submitData = () => {
    const userData = document.getElementById("input-username").value;
    const userEmail = document.getElementById("input-email").value;
    setUser(userData);
    setEmail(userEmail);

    if (userData && userEmail) {
      setLogin(true);
     sessionStorage.setItem('userName', userData)
     sessionStorage.setItem('userEmail', userEmail)
    } else {
      toast.error("Ingresá los datos correspondientes");
    }
  };

  if (login === true) {
    return (<Navigate to="/adminpage" />)
  }

  return (
    <div>
      <Toaster />
      <h1>Iniciar sesión</h1>
      <form>
      <input
        type="text"
        name="username" id="input-username" required
        //value={username}
        //onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        name="email" id="input-email" required
        //value={password}
        //onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => submitData()}>Iniciar sesión</button>
      </form>
    </div>
  );
  }

export default LoginForm
