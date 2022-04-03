import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'


function TaskList(taskLists) {
    console.log(taskLists); // to read
    return (
    <div>
      <h2 className="text-center">Task List</h2>
      <hr />
               <Table striped hover>
                    
                    <tbody>
                        {
                            taskLists.map((item, i)=>(

                            <tr>
                                <td>
                                    <Form.Check type="checkbox" label="Check me out" />
                                </td>
                      
                                <td>{item.task}</td>
                                <td>{item.hr}hrs</td>

                       
                        
                                <td className="text-end">
                                    <Button variant="danger" >
                                        <i className="fa-solid fa-trash-can" ></i>
                                    </Button> {" "}
                                    <Button variant="primary">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Button>
                                </td>
                            </tr> 

                            ))
                        }
                      
                    </tbody>
                </Table>
          
            

           
        

    </div>
  )
}

export default TaskList