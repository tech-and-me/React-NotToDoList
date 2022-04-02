import React from 'react'
import { Button, Form } from 'react-bootstrap'

function FormRow() {
  return (
    
        <tr>
                        <td>
                            <Form.Check type="checkbox" label="Check me out" />
                        </td>
                        <td>task name</td>
                        <td>10 hours</td>
                        <td className="text-end">
                            <Button variant="danger" >
                                <i className="fa-solid fa-trash-can" ></i>
                            </Button> {" "}
                            <Button variant="primary">
                                <i className="fa-solid fa-arrow-right"></i>
                            </Button>
                        </td>
        </tr>               
    
  )
}

export default FormRow