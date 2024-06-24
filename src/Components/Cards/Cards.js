const Cards = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px 10px',}}>
            <div style={{width: 'max-content', backgroundColor: 'orange', padding: '5px 20px'}}><h4>New Todo</h4></div>
            <div style={{width: 'max-content', backgroundColor: 'gray', padding: '5px 20px'}}><h4>Todo List</h4></div>
            <div style={{width: 'max-content', backgroundColor: 'green', padding: '5px 20px'}}><h4>Completed Todo</h4></div>
            <div style={{width: 'max-content', backgroundColor: 'red', padding: '5px 20px'}}><h4>Trash</h4></div>
        </div>
    )
}

export default Cards