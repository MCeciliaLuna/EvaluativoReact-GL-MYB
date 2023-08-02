import loginState from "../context/loginStore";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const setLogin = loginState((state) => state.setLogin);
  
  const logout = () => {
    setLogin(false)
   return (<Navigate to="/" />);
  }

  const back = () => {
    window.history.back()
  }

  return (
    <div>
      <h2>Navbar</h2>
      <button onClick={()=> logout()}>cerrar sesion</button>
      <button onClick={()=> back()}>Volver atrás</button>
    </div>
  );
};

export default Navbar;
