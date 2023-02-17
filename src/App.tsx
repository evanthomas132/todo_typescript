import "./index.css";
import TodoInput from "./components/TodoInput/TodoInput";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoInput todos={[]} />
    </div>
  );
}

export default App;
