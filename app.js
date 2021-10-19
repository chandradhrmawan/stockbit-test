import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import link from "./routers/index.js"
import { errorMessage, statusCode, successMessage } from "./helpers/statusHelpers.js"
import { loging } from "./middlewares/loggerMiddlewares.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port).on("listening", () => {
  console.log(`API server started on port : ${port}`);
});

/**
 * Middleware
 */
app.use(express.json());
app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 })
);

const corsOptions = {
  exposedHeaders: ["Authorization", "App-Control"],
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.use(loging);


app.get('/', (req, res) => {
  res.status(statusCode.success).json(successMessage())
})


/**
 * Routes
 */
const baseUrl = "/api";
app.use(baseUrl, link);

app.use((req, res, next) => {
  res.status(statusCode.notfound).json(errorMessage())
});

export {
  app
}