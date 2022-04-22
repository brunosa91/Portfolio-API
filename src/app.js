import express from "express";
import db from "./Config/dbConnect.js";
import animes from "./Models/AnimesModel.js";
import routes from "./Routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com banco feita com sucesso");
});
const app = express();

// const anime = [{ id: 1, titulo: "One piece" }];

app.use(express.json());
routes(app);

export default app;
