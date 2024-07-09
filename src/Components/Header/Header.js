import { Button } from "react-bootstrap";
import classes from "./Header.module.css";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";

const Header = () => {
    const authCtx = useContext(AuthContext)
  const user = localStorage.getItem('email')
  
  const logoutHandler = () => {
    authCtx.logOut()
  }
  return (
    <div className={classes.mainDiv}>
      <h1 className={classes.heading}>TODO TRACKER</h1>
      <div className={authCtx.loggedIn ? classes.userDiv : classes.hideUserDiv}>
        <p><span style={{fontWeight: "bold"}}>USER: </span>{user}</p>
        <Button className={classes.btn} onClick={logoutHandler}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Header;
