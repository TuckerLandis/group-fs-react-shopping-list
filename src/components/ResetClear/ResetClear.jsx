function ResetClear ({shoppingList, removeItem}) {

    const handleClear = () => {
        console.log('Clicked!');
        console.log(shoppingList);
        // shoppingList.forEach(item => removeItem(item))
    }
    return (
        <>
            <button>Reset</button>
            <button onClick={handleClear}>Clear List</button>
        </>
    )
}

export default ResetClear;