import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {





    // remove an item from the shopping list
    const removeItem = (itemId) => {
        console.log('Removing item:', id);
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
