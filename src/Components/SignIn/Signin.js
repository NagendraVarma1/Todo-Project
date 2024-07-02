import { Button, Form } from "react-bootstrap";
import classes from './Signin.module.css'
import { useRef } from "react";

const Signin = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        localStorage.setItem('email', email);
        console.log(password)
        //here we have to add the authentication code
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
                <Button className={classes.btn} type="submit">Sign In</Button>
           </Form>
        </div>
    )
}

export default Signin;