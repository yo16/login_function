import { useQuery } from "@apollo/client";

import { LIST_USERS } from "./graphql.js";

const ListUsers = () => {
    const { loading, error, data } = useQuery(LIST_USERS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
  
      return (
        <div>
            <h3>ユーザーリスト（複数件問い合わせサンプル）</h3>
            <table border="1">
            <thead>
                <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                </tr>
            </thead>
            <tbody>
            {data.users.map((user, i) => (
                <tr key={`user_list_tr_${i}`}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    );
};

export default ListUsers;
