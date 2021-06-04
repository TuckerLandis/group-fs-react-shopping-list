
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ResetClear from '../ResetClear/ResetClear';

function App() {


    useEffect(() => {
        console.log('in useEffect');
        getShoppingList();
    }, []); // end useEffect

    // GET
    const getShoppingList = () => {
        axios.get('/list')
        .then(response => {
            console.log('response data: ', response.data);
            setShoppingList(response.data);
        }) // end .then
        .catch(error => {
            console.log('error getting shopping list items: ', error);
        }) // end .catch, end axios.get
    } // end getShoppingList const


    const purchaseItem = () => {

        Axios.put(`/list/${itemId}`)
        .then(response => {
            //get list
        }).catch(error => {
            console.log('error purchasing item ', error);
        })
    } 


    // remove an item from the shopping list
    const removeItem = (itemId) => {
        console.log('Removing item:', itemId);
        // axios DELETE request
        axios.delete(`/list/${itemId}`)
            .then(response => {
                console.log('Item deleted');
                // Call a get list below here
            })
            .catch(error => {
                alert('Error deleting item');
                console.log(error);
            });
    }



    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ResetClear />
            </main>
        </div>
    );
}

export default App;