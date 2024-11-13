import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Word!!");
});

app.get("/users", (req: Request, res: Response) => {
  let usuarios = [
    {
      nome: "Adauto",
      idade: 30,
    },
    {
      nome: "Matteo",
      idade: 3,
    },
  ];
  res.send(usuarios);
});

app.listen(3333, () => {
  console.log("Servidor rodando na Porta 3000");
});
