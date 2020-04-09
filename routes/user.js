// create router
let express = require('express');
let router = express.Router();

// get userID
router.get('/:user_id', (req, res) => {
    res.send(`Welcome back ${req.params.user_id}`);
})

// get multiple users
router.get('/', (req, res) => {
    res.send(`Welcome new user`);
})

// export routes
module.exports = router;