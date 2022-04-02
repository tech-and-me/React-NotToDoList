import {Container} from "react-bootstrap";
import './App.css';
import {AddForm} from "./components/form/AddForm";
import TaskList from "./components/tasklist/TaskList";
import Title from "./components/title/Title";
import {useState} from "react";


function App() {
  //state to store all the task lists
  const [taskLists, setTaskList] = useState([]);

  const addToTaskList = taskObj => {
    console.log(taskObj);
    setTaskList([...taskLists, taskObj]);
  }



  return (
    <div className="wrapper">
      <Container>
        {/*title​​​​​​​​ component*/}
        <Title />
        {/*form​ components*/}
        <AddForm addToTaskList={addToTaskList}/>

        <hr />
        <TaskList />

      </Container>
    </div>
  );
}

export default App;
