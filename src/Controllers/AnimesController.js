import animes from "../Models/AnimesModel.js";

class AnimesController {
  static ListarAnimes = (req, res) => {
    animes.find((err, animes) => {
      res.status(200).send(animes);
    });
  };
  static CadastrarAnime = (req, res) => {
    let cadastroAnime = new animes(req.body);
    cadastroAnime.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar anime` });
      } else {
        res.status(201).send(cadastroAnime.toJSON());
      }
    });
  };
}

export default AnimesController;
