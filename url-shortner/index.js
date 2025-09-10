import urlRouter from "./routes/url.route.js";
import staticRouter from "./routes/staticRouter.route.js"
import express from "express";
import { URL } from "./models/url.model.js";
import { dbConnection } from "./utils/dbConnection.js";
import path from 'path'; //for ejs config
 

const app = express();
const PORT = 8001;


//connecting with MongoDB
dbConnection();

//config for ejs,for sever side rendering
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));



// middlware for parsing the JSON Request
app.use(express.json());

// middlware for parsing the FORM Request
app.use(express.urlencoded({extended:false}))


//TASK 1
app.use("/url", urlRouter);   //--> pass the command to the urLRouter 


app.use('/',staticRouter)


// TASK 2  -> to redirect
app.get("/:shortURL", async (req, res, next) => {

  // if (req.path === "/favicon.ico") {
  //   next(); // skip handling favicon requests
  // }

  const receivedURL = req.params.shortURL;
  // console.log(receivedURL+' is this')

  const entry = await URL.findOneAndUpdate(
    { shortId: receivedURL },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );
  // console.log(entry)

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectURL);
});



//server listener
app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
