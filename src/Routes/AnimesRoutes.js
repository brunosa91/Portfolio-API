import express from "express";

import AnimesController from "../Controllers/AnimesController.js";

const router = express.Router();

router
  .get("/animes", AnimesController.ListarAnimes)
  .post("/animes", AnimesController.CadastrarAnime);

export default router;
