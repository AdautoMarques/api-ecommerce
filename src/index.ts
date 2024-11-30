import express from "express";
import { routes } from "./routes";
import { initializeApp } from "firebase-admin/app";
import { errorHandler } from "./middlewares/error-handler-middleware.js";

initializeApp();
const app = express();

routes(app);
errorHandler(app);

app.listen(3333, () => {
  console.log("Servidor rodando na Porta 3333!!");
});
