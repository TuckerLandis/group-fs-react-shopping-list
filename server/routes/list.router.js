const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// ⬇ Post request for adding a new item
router.post('/', (req, res) => {
    // ⬇ Sets up what we want from the user
    const item = req.body;
    // ⬇ Tells sql WHAT and WHERE we'd like to do AND sanitizes 
    const queryText = `INSERT INTO list ("name", "quantity", "unit") VALUES ($1, $2, $3)`;
    // ⬇ The $1, $2 will get substituted with the values from the array
    pool.query(queryText, [item.name, item.quantity, item.unit])
        .then( result => {
            console.log(`Added item to the database`, item);
            res.sendStatus(201);
        })
        .catch( err => {
            console.log(`Error adding ${queryText} to the database`, err);
            res.sendStatus(500);
        })
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