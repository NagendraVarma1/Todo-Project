import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Cards.module.css";

const Cards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <div className={classes.mainDiv}>
      <div
        className={path === "/" ? classes.newTodoActive : classes.newTodo}
        onClick={() => navigate("/")}
      >
        New Todo
      </div>
      <div
        className={
          path === "/todoList" ? classes.todoListActive : classes.todoList
        }
        onClick={() => navigate("/todoList")}
      >
        Todo List
      </div>
      <div
        className={
          path === "/completedTodo"
            ? classes.completedTodoActive
            : classes.completedTodo
        }
        onClick={() => navigate("/completedTodo")}
      >
        Completed Todo
      </div>
      <div
        className={path === "/trash" ? classes.trashActive : classes.trash}
        onClick={() => navigate("/trash")}
      >
        Trash
      </div>
    </div>
  );
};

export default Cards;
