import {Router} from "express";
import {praticachefsController} from "../controllers/praticachefsController.js";

const router = Router();

router.get("/praticachefs", praticachefsController.getAllChefs);