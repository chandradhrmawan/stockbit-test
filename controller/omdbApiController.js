import { getMovieApi } from "../services/apiServices.js"
import { errorMessage, statusCode, successMessage } from "../helpers/statusHelpers.js"

const getMovie = async (req, res) => {
    try {

        let { Title } = req.query

        let data = await getMovieApi('s', Title)

        res.status(statusCode.success).json(successMessage(data))
    } catch (err) {
        res.status(statusCode.bad).json(errorMessage(err.message))
    }
};

const findMovie = async (req, res) => {
    try {

        let { imdbID } = req.query

        let data = await getMovieApi('i', imdbID)

        res.status(statusCode.success).json(successMessage(data))
    } catch (err) {
        res.status(statusCode.bad).json(errorMessage(err.message))
    }
};

export {
    getMovie,
    findMovie
}