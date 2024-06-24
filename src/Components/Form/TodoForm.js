import { Col, Form, Row } from "react-bootstrap";

const TodoForm = () => {
  return (
    <div
      style={{
        backgroundColor: "#F4E7F5",
        width: "90%",
        marginLeft: "5%",
        height: "400px",
        color: "black",
      }}
    >
      <h3>Add New Todo</h3>
      <Form style={{ width: '80%', marginLeft: '10%'}}>
        {/* Added some dummy input fields here....should modify it as needed  */}
        <Row>
          <Col lg={6} sm={12} className="mt-3">
            <Form.Group>
              <Form.Label>Todo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col lg={6} sm={12} className="mt-3 ml-2">
          <Form.Group>
            <Form.Label>Todo</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          </Col>
          
        </Row>
      </Form>
    </div>
  );
};

export default TodoForm;
