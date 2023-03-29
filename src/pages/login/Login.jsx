import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "../home/Home";


const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate=useNavigate();
  const navigateHome=()=>{
    navigate('/');
  }
  const handleLogin = () => {
    login();
    navigateHome();
    
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello User!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>

            <Routes>
              <Route path="./home/Home" element={<Home />} />
            </Routes>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;