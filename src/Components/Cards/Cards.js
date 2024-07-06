import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Cards.module.css";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";
import { Button } from "react-bootstrap";

const Cards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const authCtx = useContext(AuthContext)

  const user = localStorage.getItem('email')
  
  const logoutHandler = () => {
    authCtx.logOut()
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.userDiv}>
        <p>{user}</p>
        <Button className={classes.btn} onClick={logoutHandler}>
          Log Out
        </Button>
      </div>
      <div
        className={path === "/form" ? classes.newTodoActive : classes.newTodo}
        onClick={() => navigate("/form")}
      >
        New Todo
      </div>
      <div
        className={
          path === "/" ? classes.todoListActive : classes.todoList
        }
        onClick={() => navigate("/")}
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
      {/* <div
        className={path === "/trash" ? classes.trashActive : classes.trash}
        onClick={() => navigate("/trash")}
      >
        Trash
      </div> */}
    </div>
  );
};

export default Cards;
