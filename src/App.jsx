import "./App.css";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import AddUsers from "./components/AddUsers";
import Users from "./components/Users";
import ComponentHoc from "./components/HOC/ComponentHoc";
import ComponentHoc2 from "./components/HOC/ComponentHoc";

function App() {
  return (
    <>
      {/* <AddTodos/>
        <Todos/> */}

      {/* <AddUsers />
      <Users /> */}

      <ComponentHoc/>
      <ComponentHoc2/>
    </>
  );
}

export default App;
