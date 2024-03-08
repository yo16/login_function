import express from "express";
import http from "http";
//import cors from "cors";
//import { ApolloServer, gql } from "apollo-server";
import { ApolloServer } from "@apollo/server";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";

// Expressサーバーとの統合
const app = express();

// Expressサーバーへの受信リクエストを処理するhttpServerの設定
const httpServer = http.createServer(app);

// ApolloServerの初期設定
const server = new ApolloServer({ typeDefs, resolvers });

// ApolloServerを起動
await server.start();
app.listen(4000);


console.log(`🚀 Server ready at http://localhost:4000 !`);
