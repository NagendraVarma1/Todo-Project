import { Form } from "react-bootstrap";

const TodoForm = () => {
  return (
    <div style={{
      backgroundColor: "#F4E7F5",
      width: "90%",
      marginLeft: "5%",
      height: "400px",
      color: "black",
    }}>
      <h3>Add New Todo</h3>
      <Form>
        <Form.Group>
          <Form.Label>Todo</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </Form>
    </div>
  );
};

export default TodoForm;
