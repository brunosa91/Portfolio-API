import app from "./app.js";

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log(`servidor aberto na http://localhost:${porta}/`);
});
