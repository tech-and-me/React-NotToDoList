import {Col, Container, Row} from "react-bootstrap";
import './App.css';
import {AddForm} from "./components/form/AddForm";
import TaskList from "./components/tasklist/TaskList";
import BadList from "./components/tasklist/BadList";
import Title from "./components/title/Title";
import {useState} from "react";


function App() {

  //state to store all the task lists
  const [taskLists, setTaskList] = useState([]);

  const addToTaskList = taskObj => {
    console.log(taskObj); // to read
    setTaskList([...taskLists, taskObj]);
  }
  console.log(taskLists); // to read

  // 1. delete on click delete button
  const removeFromTaskLists = i => {
    alert(i);
  }

  return (
    <div className="wrapper">
      <Container>
        
        <Title />
        
        <AddForm addToTaskList={addToTaskList}/>

        <hr />
        <Row>
          {/* for Task List */}
          <Col md="6">
            <TaskList taskLists={taskLists} removeFromTaskLists={removeFromTaskLists}/>
          </Col>

           {/* for Bad List*/}
          <Col md="6">
            <BadList />
          </Col>

        </Row>

        {/* Total hours */}
        <Row>
          <Col>
            <h3 className="mt-5"> The total allocated hours</h3>
          </Col>


        </Row>

      </Container>
    </div>
  );
}

export default App;
