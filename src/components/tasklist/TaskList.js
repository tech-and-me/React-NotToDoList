import React from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
import FormRow from '../form/FormRow'

function TaskList() {
  return (
    <div>
        <Row>
            <Col md="6">
                <h2 className="text-center">Task List</h2>
                <hr />
                <Table striped hover>
                    {/* delete thead */}
                    <tbody>
                        <FormRow />
                    </tbody>
                </Table>
            </Col>
            
            <Col md="6">
                <h2 className="text-center">Bad List</h2>
            </Col>
        </Row>

    </div>
  )
}

export default TaskList