import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const setLogin = loginStore((state) => state.setLogin);
  
  const logout = () => {
    setLogin(false)
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('userEmail')
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
