To Dos:
- [ ] Full stack GET route
    - [ ] AXIOS in react component
    - [ ] server route
    - [ ] Display list on DOM (alphabetically to start)
        - [ ] Buy button: attach to PUT route later for purchased
            - [ ] When clicked, this item needs to go to the bottom of the shopping list
        - [ ] Remove button: attach to DELETE route later
        

- [ x ] Full stack POST route
    - [ x ] AXIOS in react component
    - [ x ] server route
    - [ ] DOM readout
        - [ ] Form:
            - [ ] Item input
            - [ ] Quantity input
            - [ ] Unit input
            - [ ] Add to list button

- [ ] Full stack PUT route
    - [  ] AXIOS in react component
    - [  ] server route
    - [ ] marks items as purchased
        - [ ] Conditional rendering: remove purchased and delete buttons, display "Purchased" somehow

- [ ] Full stack DELETE route
    - [ ] AXIOS in react component
    - [x] server route
    - [ ] Clear Button: Removes all items from the list, DOM, databse, --> net zero!


        

- [ ] Components
    - [ ] App: houses axios
    - [ ] Header: Is the header
    - [ ] ResetClear
    - [ ] ShoppingForm
    - [ ] ShoppingList
    - [ ] ShoppingListItem









Data Structure:

DB name:
fs-react-shopping

table name:
list

routes
/list

data model {
    id PRIMARY KEY SERIAL
    name: VARCHAR(80) NOT NULL/ string
    quantity: number NOT NULL
    unit: VARCHAR(20)/ string
    purchased: BOOL default false
}

state needs: 
[shoppingList, setShoppingList] - in App.jsx

[shoppingItem, setShoppingItem] - in ShoppingForm.jsx
[itemQuantity, setItemQuantity] - in ShoppingForm.jsx
[itemUnit, setItemUnity] in ShoppingForm.jsx


--DB CREATE--

CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity INT NOT NULL,
	unit VARCHAR(20),
	purchased BOOLEAN DEFAULT FALSE
);

INSERT INTO list (name, quantity, unit)
VALUES ('Bread', 1, 'loaf'),
('Milk', 2, 'gallon');

SELECT * FROM "list";