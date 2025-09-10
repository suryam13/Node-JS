import express from "express";
import { handleDeleteEntry, handleGenerateNewShortURL } from "../controllers/url.controller.js";
import { handleGetAnalytics } from "../controllers/url.controller.js";

const urlRouter = express.Router();

//TASK 1
urlRouter.post("/", handleGenerateNewShortURL); //url is been received in the req object as a json

//TASK 3
urlRouter.get('/analytics/:shortID',handleGetAnalytics);

//To delete an entry of shortID record
urlRouter.delete('/delete/:shortID',handleDeleteEntry)
export default urlRouter;
