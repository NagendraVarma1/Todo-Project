import { useNavigate } from 'react-router-dom'
import classes from './Cards.module.css'

const Cards = () => {

    const navigate = useNavigate();
    return (
        <div className={classes.mainDiv}>
            <div className={classes.newTodo} onClick={() => navigate('/')}>New Todo</div>
            <div className={classes.todoList} onClick={() => navigate('/todoList')}>Todo List</div>
            <div className={classes.completedTodo}>Completed Todo</div>
            <div className={classes.trash}>Trash</div>
        </div>
    )
}

export default Cards