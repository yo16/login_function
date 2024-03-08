import { gql } from "@apollo/client";

// ユーザー一覧を取得
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

// ユーザーを追加
const ADD_USER = gql`
    mutation AddUser($name: String!, $email: String!, $password: String!) {
        addUser(name:$name, email:$email, password:$password) {
            id
            name
            email
            password
        }
    }
`;

// ユーザーを１件取得
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

export {
    ADD_USER,
    LIST_USERS,
    GET_USER,
};
