import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/urlShortener")
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => console.error(err));
};
