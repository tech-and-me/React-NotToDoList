import {Container} from "react-bootstrap";
import './App.css';
import {AddForm} from "./components/form/AddForm";
import TaskList from "./components/tasklist/TaskList";
import Title from "./components/title/Title";
import {useState} from "react";


function App() {
  //state to store all the task lists
  const [taskList, setTaskList] = useState([]);

  const addToTaskList = taskObj => {
    console.log(taskObj);
    setTaskList([...taskList, taskObj]);
  }



  return (
    <div className="wrapper">
      <Container>
        {/*title​​​​​​​​ component*/}
        <Title />
        {/*form​ components*/}
        <AddForm addToTaskList={addToTaskList}/>

        <hr />
        <TaskList taskList={taskList}/>

      </Container>
    </div>
  );
}

export default App;
