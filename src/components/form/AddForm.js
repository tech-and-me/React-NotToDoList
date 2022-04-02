import React, {useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const initialState = {
    task: "hi",
    hr: "",
}

export const  AddForm =({addToTaskList})=> {
   
    const [task, setTask] = useState(initialState); // can rename the variable 'task' to newInfo
    

    const handleOnChange = e => {
        const {name, value} = e.target;
        // console.log(name, value);
        setTask({...task,[name]:value}); // can rename the variable 'task' to newInfo 
    };
    console.log(task);

    const handleOnSubmit = e =>{
        e.preventDefault();
        console.log(task); // can rename the variable 'task' to newInfo
        addToTaskList(task); // can rename the variable 'task' to newInfo
    }

  return (
    <div>

    <Form onSubmit={handleOnSubmit}>
    <Row className="g-2">
        <Col xs={7}>
        <Form.Control placeholder="task..."
        name="phannaTask"
        onChange={handleOnChange} />
        </Col>
        <Col md={3}>
        <Form.Control placeholder="hours..." name="hours" type="number" />
        </Col>
        <Col>
            <Button variant="primary" type="submit">Add Task</Button>
        </Col>
    </Row>
    </Form>
    </div>
  )
};
