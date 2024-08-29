import "./App.css";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import AddUsers from "./components/AddUsers";
import Users from "./components/Users";
import ComponentHoc from "./components/HOC/ComponentHoc";
import ComponentHoc2 from "./components/HOC/ComponentHoc";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  function handleLogin(){
    const AuthToken = "helloWorld"
    localStorage.setItem("AuthToken", AuthToken);
    navigate("/dashboard");
  }
  function handleLogout(){
    localStorage.removeItem("AuthToken");
    navigate("/")
    }

  return (
    <>
      {/* <AddTodos/>
        <Todos/> */}

      {/* <AddUsers />
      <Users /> */}

      <ComponentHoc/>
      <ComponentHoc2/>

      <button onClick={handleLogin} style={{margin:30}}>Login</button>
      <button onClick={handleLogout} style={{margin:30}}>Logout</button>
    </>
  );
}

export default App;
