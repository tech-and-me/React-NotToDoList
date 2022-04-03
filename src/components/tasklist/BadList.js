import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'


// 2. switch task to bad list when you click on the arrow button

function BadList({badLists, removeFromBadLists}) {
  console.log(removeFromBadLists);

  return (
    <div>
    <h2 className="text-center">Bad List</h2>
      <hr />
             <Table striped hover>
                  {/* delete thead */}
                  <tbody>
                    {
                      badLists.map((item, i) => (
                      <tr key={i}>
                      <td>
                          <Form.Check type="checkbox" label="" />
                      </td>
                    
                      <td>{item.task}</td>
                      <td>{item.hr}hrs</td>

                     
                      
                      <td className="text-end">

                          <Button variant="primary">
                              <i className="fa-solid fa-arrow-left"></i>
                          </Button>
                          {" "}
                          <Button variant="danger" onClick={() => removeFromBadLists(i)}>
                              <i className="fa-solid fa-trash-can" ></i>
                          </Button> {" "}
                          
                      </td>
                  </tr>   
                      ))
                    }
                  
                  </tbody>
              </Table>

              <h4 className="mt-3 text-danger"> You could have same:</h4>
  
  </div>
  )
}

export default BadList