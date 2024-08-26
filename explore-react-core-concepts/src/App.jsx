import Actor from "./Actor";
import "./App.css";
import Todo from "./Todo";

function App() {

  const actors =['Johny Depp', 'Decaprio', 'Christian Bale', 'Hug Jackman', 'Alfred Nobel']
  return (
    <>
      <h1>Vite + React</h1>
      {
        actors.map(actor => <Actor name={actor} key={actor.indexOf}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn JS" isDone={false}></Todo>
      <Todo task="Learn Next JS" isDone={false}></Todo> */}
    </>
  );
}



export default App;
