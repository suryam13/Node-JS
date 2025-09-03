import express, { urlencoded } from 'express';
import {data} from './MOCK_DATA.js'
import fs from 'fs';


const app = express();
const PORT = 3000;

app.use(urlencoded({extended:false}))


//creating middleware and using middleware globally for all routes
app.use((req,res,next)=>{
    console.log('hello from middleware 1');
    //if i do only uptill here and not call next() then the request will just hang which is not good
    next(); //if i do this then it would go to next middleware/route handler
    // res.send('hey'); //the process would end here itself
})

app.get('/',(req,res)=>{
    res.send('welcome to the home GET / endpoint')
})

//sending all the users in the database on GET api/users as JSON data
app.get('/api/users',(req,res)=>{
    res.json(data);
})

//sending the user with a dynamic id 
app.get('/api/user/:id',(req,res)=>{
    const id  = req.params.id;

    const user = data.find((item) => item.id == id)

    res.send(user)
}) 

app.post('/api/users',(req,res)=>{


    //create new user

    //i will be getting the data in the req.body
    const getBody = req.body;
    data.push({id:data.length+1,...getBody})


    //doing stringify because in file system only raw data can be sent and we have an array so it gets transformed into json string
    fs.writeFile('./MOCK_DATA.js',JSON.stringify(data),(err,result)=>{
         res.json({
            status:`id : ${data.length} entered successfully`
        })
    })

})


//lets suppose if i want to have multiple http request on one route,then for readibiity purpose we can use 

app.route('/api/user/:id')
.patch((req,res)=>{
    //edit the user with id
    res.json({status : 'pending'})
})
.delete((req,res)=>{
    //delete the user with id
    res.json({status : 'pending'})
})




app.listen(PORT,(req,res)=>{
    console.log(`server started on PORT ${PORT}`)
})


