import app from "./app";

const porta = 3000;

app.listen(porta, () => {
  console.log(`servidor aberto na http//:localhost:${porta}/`);
});
