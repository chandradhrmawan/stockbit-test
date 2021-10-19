import { errorMessage, statusCode, successMessage } from "../helpers/statusHelpers.js"

const getRefactorString = async (req, res) => {
    try {
        let { str } = req.query

        res.status(statusCode.success).json(successMessage({
            param: str,
            oldFunc: findFirstStringInBracket(str),
            newFunc: refactorFindFirstStringInBracket(str)
        }))
    } catch (err) {
        res.status(statusCode.bad).json(errorMessage(err.message))
    }
};

const refactorFindFirstStringInBracket = (str) => {
    return (/\(([^)]+)\)/).exec(str)[1];
}

const findFirstStringInBracket = (str) => {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0) {
                    return wordsAfterFirstBracket.substring(0,
                        indexClosingBracketFound);
                }
                else {
                    return '';
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
}

export {
    getRefactorString
}