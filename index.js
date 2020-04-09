// create server
let express = require('express');
let app = express();

// variable for port number
let portNumber = 8000;

// test route
// app.get('/test', (req,res) => {
//     res.send("TEST");
// });

// import route modules
let api = require('./routes/api.js');
let user = require('./routes/user.js');

// mount routes
app.use('/api', api);
app.use('/user', user);

// allow server to listen on port 8000
app.listen(portNumber, () => {
    console.log(`Listening at port ${portNumber}`)
});