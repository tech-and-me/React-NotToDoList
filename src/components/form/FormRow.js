import React from 'react'
import { Button, Form } from 'react-bootstrap'

function FormRow({taskList}) {
    console.log(taskList);
  return (
    
        <tr>
                        <td>
                            <Form.Check type="checkbox" label="Check me out" />
                        </td>

                        <td>{taskList}</td>
                        <td>hr</td>
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