const express = require('express');
const connectDB = require('./DB/Connection');
var cors = require('cors')



const app = express();

app.use(cors());

// https://mscscheduler1.herokuapp.com/

app.use((req, res, next) =>
{
    // '*' means we are allowing every host or client
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // This header is used to tell which kind of request can be sent i.e post,get and options. Browser will automatically send the 'OPTIONS'
    // method before sending the post requst thats why have allowed this method also.
    res.setHeader("Access-Control-Allow-Methods", 'POST,GET,OPTIONS');

    // This header tells which type of heade(s) you want to send
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // We don't allow "OPTIONS" method to reah our graphql api as it will not handle it correctly
    if( req.method === "OPTIONS" )
    return res.sendStatus(200);

    next();
})

connectDB();
app.use(express.json({ extended: false}));
//app.use(express.json({ extended: false})); 
app.use('/api/usermodel', require('./Api/User'));
app.use('/api/usermodel1', require('./Api/User1'));
app.use('/api/usermodel2', require('./Api/User2'));
//app.use('/api/usermodel2/seats', require('./Api/User2'));
//app.use(express.json({ limit: '50mb'}));
//app.use(express.urlencoded({ limit: '50mb', extended: true }));
const port = process.env.PORT || 3001; 
app.listen(port, () => {
  console.log(`app is running on ${port}`);
});