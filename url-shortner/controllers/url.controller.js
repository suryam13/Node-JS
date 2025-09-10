import { URL } from "../models/url.model.js";
import { nanoid } from "nanoid";

export async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  // return res.send(body)

  if (!body.url) res.status(400).json({ error: "url is required" });

  //before creating short id check whether that original url exists in the databse if yes then please dont create multiple entries,instead inform the user about that and send him the previous shortId

  const exists = await URL.findOne({redirectURL : body.url})

  if(exists)
    return res.json(`shortID previously exists for this URL and that is : ${exists.shortId}`)


  const shortId = nanoid(8);
  //creating of 8 digits

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render ('home',{id : shortId})
  // return res.status(201).json({ shortURL: shortId });
}

export async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;

  const result = await URL.findOne({ shortId: shortID });

  return res.status(200).json({
    analytics: result.visitHistory,
    totalClicks: result.visitHistory.length,
  });
}

export async function handleDeleteEntry(req, res) {
  const toDelete = req.params.shortID;

  const del = await URL.findOneAndDelete({ shortId: toDelete });
  if (!del) return res.send("no such thing");

  const currData = await URL.find();

  return res.status(202).json({ status: "deleted", currData: currData });
}
