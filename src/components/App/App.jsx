
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ResetClear from '../ResetClear/ResetClear';
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';




function App() {
    const [shoppingList, setShoppingList] = useState([]);


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

// ⬇ Function to add a new item to the list
    // ⬇ Will be called from the ShoppingForm
    const addToList = (newFoodItem) => {
        axios.post('/list', newFoodItem)
        .then( response => {
        // ⬇ Calls function to get the updated shopping list from the database
        getShoppingList();
        //TODO - Clear Inputs for setShoppingItem, setShoppingQuantity, setShoppingUnit
        })
        .catch( err => {
        console.log('error adding item', err)
        })
    }

    const purchaseItem = (itemId) => {
        axios.put(`/list/${itemId}`)
        .then(response => {
            getShoppingList();
        }).catch(error => {
            console.log('error purchasing item ', error);
        })
    } 

    const resetPurchased = (itemId) => {
        axios.put(`/list/reset/${itemId}`)
        .then(response => {
            getShoppingList();
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
                getShoppingList();
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
                <ShoppingForm addToList={addToList} />
                <h2>Shopping List</h2>
                <ResetClear removeItem={removeItem} shoppingList={shoppingList} resetPurchased={resetPurchased}/>
                <ShoppingList shoppingList={shoppingList}/>
            </main>
        </div>
    );
}

export default App;