import mongoose from "mongoose";

const animesSchema = new mongoose.Schema({
  id: { type: String },
  título: { type: String, required: true },
  gênero: { type: String, required: true },
  autor: { type: String, required: true },
  Ano: { type: Number },
});

const animes = mongoose.model("animes", animesSchema);
export default animes;
