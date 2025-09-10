import express from 'express'
import { URL } from '../models/url.model.js';

const router = express.Router();

router.get('/',async (req,res)=>{

    const data = await URL.find({})
    res.render('home',{url:data})
})
export default router;