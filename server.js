const express = require('express')
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const sql = require('./sql');
const cookieParser = require('cookie-parser');

mongoose.set('strictQuery', false);

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // enable credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// mongoose.connect('mongodb://0.0.0.0:27017/Login')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });




// Call the initializeDatabase function when the server starts
// const con = initializeDatabase();
// console.log("rrrrrrrrr",con);

  sql.con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connection Established!");
});


app.listen(4000,function check(error)
{
    if(error)
    console.log("Error");
    else
    console.log("Started");
});

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use(routes);
app.use(cookieParser());
