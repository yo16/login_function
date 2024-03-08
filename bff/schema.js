export const typeDefs = `#grqphql

# "User"型の定義
type User {
    id: Int
    name: String
    email: String
    password: String
}

# クエリの定義
type Query {
    user(name: String!, password: String!): User
    users: [User]
}

# Mutationの定義
type Mutation {
    addUser(name: String!, password: String!, email:String): User!
}
`;
