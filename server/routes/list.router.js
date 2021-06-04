const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// DELETE
router.delete('/:id', (req, res) => {
    // hold id for sanitizing
    const id = req.params.id;
    const queryText = `DELETE FROM "list" WHERE "id" = $1`;

    pool.query(queryText, [id])
        .then(result => {
            console.log('Deleted an item from the database', id);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(`Error making database DELETE query ${queryText}`, error);  
        });
})


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