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

module.exports = router;