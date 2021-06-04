import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';


function App() {

    const purchaseItem = () => {

        Axios.put(`/list/${itemId}`)
        .then(response => {
            //get list
        }).catch(error => {
            console.log('error purchasing item ', error);
        })
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
