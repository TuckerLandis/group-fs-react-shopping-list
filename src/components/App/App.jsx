import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

// ⬇ Function to add a new item to the list
const addToList = (newFoodItem) => {
    axios.post('/list', {newFoodItem})
    .then( response => {
    // ⬇ Calls function to get the updated shopping list from the database
    getShoppingList();
    })
    .catch( err => {
        console.log('error adding item', err)
    })
}

function App() {
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
