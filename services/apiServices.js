import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const getMovieApi = (type, searchParam) => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.OMDB_URL}/?apikey=${process.env.OMDB_API_KEY}&${type}=${searchParam}`, {
            timeout: 3000
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
};

export {
    getMovieApi
}