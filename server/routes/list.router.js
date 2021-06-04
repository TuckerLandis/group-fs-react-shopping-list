const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...




//PUT 
router.put('/:id', (req, res) => {
    console.log('got to PUT');
    console.log('purchasing: # ', req.params.id);
    
    const queryText = `UPDATE "list" SET "purchased"='true' WHERE "list".id = $1 ; ` ;

    pool.query(queryText, [req.params.id])
    .then(result => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('error updating ', error);
        res.sendStatus(500)
    })
})

module.exports = router;