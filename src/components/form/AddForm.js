import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function AddForm() {
  return (
    <div>

    <Form>
    <Row className="g-2">
        <Col xs={7}>
        <Form.Control placeholder="task..." />
        </Col>
        <Col>
        <Form.Control placeholder="hours..." type="number" />
        </Col>
        <Col>
            <Button variant="primary" type="submit">Add Task</Button>
        </Col>
    </Row>
    </Form>
    </div>
  )
}

export default AddForm