// 20-04-09 Express Router IC
let express = require('express');
let app = express();

let api = require('./routes/api.js');
let user = require('./routes/user.js');

app.use('/api', api);
app.use('/user', user);

app.listen(8000, () => {
    console.log('Listening on port 8000')
})