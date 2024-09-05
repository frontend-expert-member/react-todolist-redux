import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Todos from "./components/todos";

function App() {
  return (
    <div className="App">
      <h1>React Todolist - Redux</h1>
      <Provider store={store}>
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
