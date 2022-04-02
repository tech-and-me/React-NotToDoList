import {Container} from "react-bootstrap";
import './App.css';
import AddForm from "./components/form/AddForm";
import TaskList from "./components/tasklist/TaskList";
import Title from "./components/title/Title";

function App() {
  return (
    <div className="wrapper">
      <Container>
        {/*title​​​​​​​​ component*/}
        <Title />
        {/*form​ components*/}
        <AddForm />

        <hr />
        <TaskList />

      </Container>
    </div>
  );
}

export default App;
