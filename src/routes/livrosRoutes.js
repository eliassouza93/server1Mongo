import express from "express";
import LivroController from "../controllers/livrosControler.js";

const router = express.Router()

router
    .get('livros' , LivroController.listarLivros)

    export default router;
    