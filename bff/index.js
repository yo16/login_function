import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

import { UserDataSource } from "./datasource/user.js";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";

// Expressサーバーとの統合
const app = express();

// Expressサーバーへの受信リクエストを処理するhttpServerの設定
const httpServer = http.createServer(app);

// ApolloServerの初期設定
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// ApolloServerを起動
await server.start();

// サーバーをマウントするパスの設定
//  Expressサーバーが、CORS, body parsing, ApolloServerを処理できるように紐づける
app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
        context: async ({ req }) => {
            return {
                dataSources: {
                    userApi: new UserDataSource()
                }
            };
        }
    }),
)

app.listen(4000);

console.log(`🚀 Server ready at http://localhost:4000 !`);
