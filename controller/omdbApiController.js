import { getMovieApi } from "../services/apiServices.js"
import { errorMessage, statusCode, successMessage } from "../helpers/statusHelpers.js"

const getMovie = async (req, res) => {
    try {

        let { type, searchParam } = req.query

        let data = await getMovieApi(type, searchParam)

        res.status(statusCode.success).json(successMessage(data))
    } catch (err) {
        res.status(statusCode.bad).json(errorMessage(err.message))
    }
};

export {
    getMovie
}