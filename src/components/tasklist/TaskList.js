import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'
// Features:
// 1. delete on click delete button
// 2. switch task to bad list when you click on the arrow button
// 3. delete from the bad list
// 4. switch bad list iem to task list when you click on let pointing arrow in the bad list
// 5. show the total allocated hours in the app components
// 6. show the total hours that could have been saved in the bad list components
// 7. make sure user can not add task that exceeds the total weekly hours 24*7 = 168hrs
// Additional 8. make the check box to be selected for the bulk delete
// Additional 9. local storage


function TaskList({taskLists, removeFromTaskLists}) {
    console.log(taskLists); // to read
    return (
    <div>
      <h2 className="text-center">Task List</h2>
      <hr />
               <Table striped hover>
                    
                    <tbody>
                        {
                            taskLists.map((item, i)=>(

                            <tr key={i}>
                                <td>
                                    <Form.Check type="checkbox" label="" />
                                </td>
                      
                                <td>{item.task}</td>
                                <td>{item.hr}hrs</td>
                                
                                <td className="text-end">
                                    <Button variant="danger" onClick={() => removeFromTaskLists(i)} >
                                        <i className="fa-solid fa-trash-can" ></i>
                                    </Button> {" "}
                                    <Button variant="primary" >
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