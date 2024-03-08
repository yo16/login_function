import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/SingUp";
import { useQuery, gql } from "@apollo/client";

const LIST_USERS = gql`
  query ListUsers {
    users {
      id
      name
      email
      password
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(LIST_USERS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <SignUp />
      <LogIn />
      <hr />
      <h3>[for sample]ユーザーリスト</h3>
      <table>
      {data.users.map((user) => (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
        </tr>
      ))}
      </table>
    </div>
  );
}

export default App;
