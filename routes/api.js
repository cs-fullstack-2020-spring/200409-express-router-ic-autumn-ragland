// create router
let express = require('express');
let router = express.Router();

// middleware to read json data
router.use(express.json());

// get record by ID
router.get('/:record_id', (req, res) => {
    res.send(`You attempted to read a single record with the ID ${req.params.record_id}`)
});

// get multiple records
router.get('/', (req, res) => {
    res.send(`You attempted to read multiple records`)
});

// create record
router.post('/', (req, res) => {
    res.send(req.body);
});

// export routes
module.exports = router;