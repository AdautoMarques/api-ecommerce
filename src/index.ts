import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Word");
});

app.listen(3333, () => {
  console.log("Servidor rodando na Porta 3333");
});
