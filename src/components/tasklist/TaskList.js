import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'


function TaskList(taskLists) {
    console.log(taskLists)
    return (
    <div>
      <h2 className="text-center">Task List</h2>
      <hr />
               <Table striped hover>
                    {/* delete thead */}
                    <tbody>
                    <tr>
                        <td>
                            <Form.Check type="checkbox" label="Check me out" />
                        </td>
                      
                    <td>task</td>
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
                    </tbody>
                </Table>
          
            

            {/* Bad List */}
        

    </div>
  )
}

export default TaskList