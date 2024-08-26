import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn JS" isDone={false}></Todo>
      <Todo task="Learn Next JS" isDone={false}></Todo>
    </>
  );
}



export default App;
