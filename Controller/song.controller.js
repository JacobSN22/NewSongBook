import SongModel from "../Models/song.model.js";

const model = new SongModel();

class SongController {
    constructor() {}

    list = async (req, res) => {
        const result = await model.list(req, res)
        res.json(result)
    }

}

export default SongController;