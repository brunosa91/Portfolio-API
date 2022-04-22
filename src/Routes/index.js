import express from "express";

import animesRoutes from "./AnimesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "rota principal" });
  });

  app.use(express.json(), animesRoutes);
};

export default routes;
