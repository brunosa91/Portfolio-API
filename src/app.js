import express from "express";
import { json } from "express/lib/response";

const app = express();

app.use(express.json());

export default app;
