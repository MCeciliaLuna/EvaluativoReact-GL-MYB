import React, { useState } from 'react';
import loginState from '../context/index.jsx';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // aqui puedo hacer las verificaciones.
    // verifico que ambos campos no estén vacíos.
    if (username.trim() !== '' && password.trim() !== '') {
      loginState.setLogin(true); // Actualiza el estado global para indicar que el usuario está autenticado
    } else {
      alert('Por favor, ingresa un usuario y contraseña válidos.');
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default LoginForm;
