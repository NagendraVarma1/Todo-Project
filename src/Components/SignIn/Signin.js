import { Button, Form } from "react-bootstrap";
import classes from './Signin.module.css'
import { useContext, useRef } from "react";
import AuthContext from "../../Store/auth-context";
import { Link } from "react-router-dom";

const Signin = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext)

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        // here we added code of google authentication 
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABRRkjJTVdq4Y_CfyNA8O010n7qM-g_MA', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": 'application.json'
            }
        }).then((res) => {
            if(res.ok){
                return res.json()
            }
            else{
                return res.json().then((data) => {
                    throw new Error(data.error.message)
                })
            }
        }).then((data) => {
            authCtx.logIn(data.email);
            console.log(data)
        }).catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div>
           <h3 className={classes.header}>Sign In</h3>
           <Form className={classes.form} onSubmit={formSubmitHandler}>
                <Form.Group className="m-3">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" ref={emailInputRef} required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" ref={passwordInputRef} required/>
                </Form.Group>
                <p style={{textAlign: 'center'}}><Link to='/signUp'>Create a New Account</Link></p>
                <Button className={classes.btn} type="submit">Sign In</Button>
           </Form>
        </div>
    )
}

export default Signin;