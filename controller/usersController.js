import { getUsers } from "../models/usersModels.js";
import { errorMessage, statusCode, successMessage } from "../helpers/statusHelpers.js"

const getUserData = async (req, res) => {
	try {
		res.status(statusCode.success).json(successMessage(await getUsers()))
	} catch (err) {
		res.status(statusCode.bad).json(errorMessage(err.message))
	}
};

export {
	getUserData
}