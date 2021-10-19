import express from "express";
import { getUserData } from "../controller/usersController.js";
import { getMovie,findMovie } from "../controller/omdbApiController.js";
import { getRefactorString } from "../controller/refactorController.js";
import { checkAnagram } from "../controller/anagramController.js";

const router = express.Router();

/**
 * users routes
 * task no 1
**/
router.get('/users/get', getUserData);

/**
 * omdb api
 * task no 2
**/
router.get('/omdb/search', getMovie);
router.get('/omdb/detail', findMovie);

/**
 * refactor code
 * task no3
**/
router.get('/refactor/get', getRefactorString);

/**
 * logic test
 * task no4 
**/
router.post('/anagram/check-anagram', checkAnagram);

export default router;
