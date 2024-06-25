import { Button, Col, Form, Row } from "react-bootstrap";
import classes from "./TodoForm.module.css";
import { useRef, useState } from "react";

const TodoForm = () => {
  const [data, setData] = useState([]);

  const titleRef = useRef();
  const startDateRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const statusRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const startDate = startDateRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    const status = statusRef.current.value;

    const formData = {
      title,
      startDate,
      description,
      dueDate,
      status
    }

    setData((prevState) => {
      return [...prevState, formData]
    })

    titleRef.current.value = '';
    startDateRef.current.value = '';
    descriptionRef.current.value = '';
    dueDateRef.current.value = '';
    statusRef.current.value = '';
  };
  console.log(data);

  return (
    <div className={classes.backGround}>
      <h3 className={classes.heading}>Add New Todo</h3>
      <Form className={classes.form} onSubmit={formSubmitHandler}>
        {/* Added some dummy input fields here....should modify it as needed  */}
        <Row>
          <Col lg={6} sm={12} className="mt-3">
            <Form.Group className="mt-3">
              <Form.Label>Todo Title</Form.Label>
              <Form.Control type="text" ref={titleRef} />
            </Form.Group>
          </Col>
          <Col lg={6} sm={12} className="mt-3 ml-2">
            <Form.Group className="mt-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" ref={startDateRef} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" ref={descriptionRef} />
        </Form.Group>
        <Row>
          <Col lg={6} sm={12} className="mt-3">
            <Form.Group className="mt-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" ref={dueDateRef} />
            </Form.Group>
          </Col>
          <Col lg={6} sm={12} className="mt-3 ml-2">
            <Form.Group className="mt-3">
              <Form.Label>Status</Form.Label>
              <Form.Select ref={statusRef}>
                <option>Select the Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button className={classes.btn} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
