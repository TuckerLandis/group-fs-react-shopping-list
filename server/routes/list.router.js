const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "list" OR BY "name" DESC;`;
    pool.query(queryText)
    .then(response => {
        console.log('Things we got from db: ', response.rows);
        res.send(result.rows);
    }) // end .then
    .catch(error => {
        console.log('serverside error getting grocery list items from db: ', error);
        res.sendStatus(500);
    }) // end .catch, end pool.query
}) // end router.get
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