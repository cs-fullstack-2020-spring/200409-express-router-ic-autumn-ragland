let express = require('express');
let router = express.Router();

router.get('/:username', (req, res) => {
    res.send(`Welcome back ${req.params.username}`);
});

router.get('/', (req, res) => {
    res.send("Hello New User");
})

module.exports = router