import "./App.css";
import SignUp from "./components/SingUp";
import LogIn from "./components/Login";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <div className="App">
      <SignUp />
      <hr />

      <LogIn />
      <hr />

      <ListUsers />
    </div>
  );
}

export default App;
