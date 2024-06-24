import classes from './Cards.module.css'

const Cards = () => {
    return (
        <div className={classes.mainDiv}>
            <div className={classes.newTodo}>New Todo</div>
            <div className={classes.todoList}>Todo List</div>
            <div className={classes.completedTodo}>Completed Todo</div>
            <div className={classes.trash}>Trash</div>
        </div>
    )
}

export default Cards