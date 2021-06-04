import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

function App() {

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
            </main>
        </div>
    );
}

export default App;