import { errorMessage, statusCode, successMessage } from "../helpers/statusHelpers.js"

const checkAnagram = async (req, res) => {
    try {
        let words = req.body

        // group anagram word 
        let anagrams = {};
        for (let i = 0; i < words.length; i++) {
            let sorted = words[i].split('').sort().join('');
            if (anagrams[sorted] != null) {
                anagrams[sorted].push(words[i])
            } else {
                anagrams[sorted] = [words[i]]
            }
        }

        // Output result
        let arr = []
        for (let key in anagrams) {
            arr.push(anagrams[key])
        }

        res.status(statusCode.success).json(successMessage(arr))
    } catch (err) {
        res.status(statusCode.bad).json(errorMessage(err.message))
    }
};

export {
    checkAnagram
}