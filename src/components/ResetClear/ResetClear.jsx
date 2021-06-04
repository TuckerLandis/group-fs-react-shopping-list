function ResetClear ({shoppingList, removeItem}) {

    const handleClear = () => {
        console.log('Clicked!');
        // iterate over each item in list and make a delete request for each one individually
        shoppingList.forEach(item => removeItem(item.id));
    }
    return (
        <>
            <button>Reset</button>
            <button onClick={handleClear}>Clear List</button>
        </>
    )
}

export default ResetClear;