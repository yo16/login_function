import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser($name: String!, $password: String!) {
    user(name:$name, password:$password) {
      id
      name
      email
      password
    }
  }
`;

const LogIn = () => {
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");

    const {loading, error, data} = useQuery(GET_USER, {
        variables: {
            name: userName,
            password,
        }
    });
    if (loading){
        //console.log("loading");
    }
    if (error){
        console.log("error");
        console.log(error.message);
    }
    const result = {
        name: "",
        id: "",
        email: "",
        password: "",
    };
    if (data && "user" in data && data.user) {
        result.id = data.user.id;
        result.name = data.user.name;
        result.email = data.user.email;
        result.password = data.user.password;
    }

    return (
        <div>
            <h3>Loginフォーム</h3>
            <ul>
                <li>
                    name:
                    <input
                        value={userName}
                        onChange={e=>setUserName(e.target.value)}
                    />
                </li>
                <li>
                    pass:
                    <input
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                </li>
            </ul>
            <ul>
                <li>id: {result.id}</li>
                <li>name: {result.name}</li>
                <li>email: {result.email}</li>
                <li>password: {result.password}</li>
            </ul>
        </div>
    );
}

export default LogIn;
