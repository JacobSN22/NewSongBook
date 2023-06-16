import express from "express";
import SongController from "../Controller/song.controller.js";

const router = express.Router();

const controller = new SongController();

router.get("/api/song", (req, res) => { controller.list(req, res) })


export { router }