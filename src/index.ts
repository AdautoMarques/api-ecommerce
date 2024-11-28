import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { initializeApp } from "firebase-admin/app";

initializeApp();

const app = express();

routes(app);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    message: "Erro interno do servidor",
  });
});

app.listen(3333, () => {
  console.log("Servidor rodando na Porta 3333!!");
});
