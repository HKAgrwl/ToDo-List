import { useState , useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    filterHandler();
  },[todos,status]);

  const filterHandler = () =>{
    switch(status){
      case'completed':
      setFilteredTodos(todos.filter(todo =>todo.completed===true));
      break;
      case'uncompleted':
      setFilteredTodos(todos.filter(todo =>todo.completed===false));
      break;
    default:
      setFilteredTodos(todos);
      break;
    }
  }
  
  return (
    <>
      <header>
        <h2>Harsh's ToDo List</h2>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText} 
        setStatus={setStatus}/>
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </>
  );
}

export default App;
