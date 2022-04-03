import React, {useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const initialState = {
    task: "",
    hr: "",
}

export const  AddForm =({addToTaskList})=> {
   
    const [newInfo, setNewInfo] = useState(initialState); // can rename the variable 'task' to newInfo
    

    const handleOnChange = e => {
        const {name, value} = e.target;
        // console.log(name, value);
        setNewInfo({...newInfo,[name]:value}); // can rename the variable 'task' to newInfo 
    };
    console.log(newInfo); // to write

    const handleOnSubmit = e =>{
        e.preventDefault();
        // console.log(task); // can rename the variable 'task' to newInfo
        addToTaskList(newInfo); // can rename the variable 'task' to newInfo
    }

  return (
    <div>

    <Form onSubmit={handleOnSubmit}>
    <Row className="g-2">
        <Col xs={7}>
        <Form.Control placeholder="task..." name="task" onChange={handleOnChange} />
        </Col>
        <Col md={3}>
        <Form.Control placeholder="hours..." name="hr" type="number" onChange={handleOnChange}/>
        </Col>
        <Col>
            <Button variant="primary" type="submit">Add Task</Button>
        </Col>
    </Row>
    </Form>
    </div>
  )
};
