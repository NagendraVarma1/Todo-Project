import { Button, Form } from "react-bootstrap";
import classes from "../SignIn/Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const SignUp = () => {

    const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const ConfirmPasswordInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = ConfirmPasswordInputRef.current.value;

    if (password === confirmPassword) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABRRkjJTVdq4Y_CfyNA8O010n7qM-g_MA",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application.json'
          }
        }
      ).then((res) => {
        if(res.ok){
            return res.json()
        }
        else{
            return res.json().then((data) => {
                throw new Error(data.error.message)
            })
        }
      })
      .then((data) => {
        navigate('/')
      })
    }
    else{
        alert("Password Doesn't Match")
    }
  };
  return (
    <div>
      <h3 className={classes.header}>Sign Up</h3>
      <Form className={classes.form} onSubmit={formSubmitHandler}>
        <Form.Group className="m-3">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" ref={emailInputRef} required />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" ref={passwordInputRef} required />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control
            type="password"
            ref={ConfirmPasswordInputRef}
            required
          />
        </Form.Group>
        <p style={{ textAlign: "center" }}>
          Already an User <Link to="/">Login</Link>
        </p>
        <Button className={classes.btn} type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
