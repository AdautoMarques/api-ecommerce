import express from "express";
import { routes } from "./routes";
import { initializeApp } from "firebase-admin/app";

initializeApp();

const app = express();

routes(app);

app.listen(3333, () => {
  console.log("Servidor rodando na Porta 3333!!");
});
