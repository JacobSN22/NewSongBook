import express from "express";
import dotenv from "dotenv";
import { postRouter as PostRouter } from "./Routes/post.router.js";
import { router } from "./Routes/song.router.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Velkommen til min side")
})

app.use(PostRouter);
app.use(router)

app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet!")
})

app.listen(port, () => {
    console.log(`Server kører på port ${port}`);
})