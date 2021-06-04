import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

import ResetClear from '../ResetClear/ResetClear';

function App() {





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
