import express from "express";

import AnimesController from "../Controllers/AnimesController.js";

const router = express.Router();

router
  .get("/animes", AnimesController.ListarAnimes)
  .get("/animes/:id", AnimesController.ListarAnimesPorId)
  .post("/animes", AnimesController.CadastrarAnime)
  .put("/animes/:id", AnimesController.AtualizarAnime)
  .delete("/animes/:id", AnimesController.ExcluirAnime);

export default router;
