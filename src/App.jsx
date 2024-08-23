import "./App.css";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import AddUsers from "./components/AddUsers";
import Users from "./components/Users";

function App() {
  return (
    <>
      {/* <AddTodos/>
        <Todos/> */}

      <AddUsers />
      <Users />
    </>
  );
}

export default App;
