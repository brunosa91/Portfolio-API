import animes from "../Models/AnimesModel.js";

class AnimesController {
  static ListarAnimes = (req, res) => {
    animes.find((err, animes) => {
      res.status(200).send(animes);
    });
  };
  static ListarAnimesPorId = (req, res) => {
    const id = req.params.id;
    animes.findById(id, (err, animes) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id do livro não localizado` });
      } else {
        res.status(200).send(animes);
      }
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
  static AtualizarAnime = (req, res) => {
    const id = req.params.id;
    animes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Anime atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static ExcluirAnime = (req, res) => {
    const id = req.params.id;
    animes.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "livro removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AnimesController;
