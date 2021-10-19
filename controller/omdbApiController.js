import { getMovieApi } from "../services/apiServices.js"
import { errorMessage, statusCode, successMessage, emptyMessage } from "../helpers/statusHelpers.js"

const getMovie = async (req, res) => {
    try {

        let { Title } = req.query

        await getMovieApi('s', Title).then(resp => {

            if (resp.Response == 'False') {
                return res.status(statusCode.notfound).json(emptyMessage())
            }

            return res.status(statusCode.success).json(successMessage(resp))

        }).catch(err => {
            return res.status(statusCode.bad).json(errorMessage(err.message))
        })

    } catch (err) {
        return res.status(statusCode.bad).json(errorMessage(err.message))
    }
};

const findMovie = async (req, res) => {
    try {

        let { imdbID } = req.query

        await getMovieApi('i', imdbID).then(resp => {

            if (resp.Response == 'False') {
                return res.status(statusCode.notfound).json(emptyMessage())
            }

            return res.status(statusCode.success).json(successMessage(resp))

        }).catch(err => {
            return res.status(statusCode.bad).json(errorMessage(err.message))
        })

    } catch (err) {
        return res.status(statusCode.bad).json(errorMessage(err.message))
    }
};

export {
    getMovie,
    findMovie
}