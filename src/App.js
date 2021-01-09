import React, { useState } from 'react';
import './App.css';

//1:00:00
function App() {
  const [todos, setTodos] = useState(['Become Successful', 'Go earn money !!', 'I am rich']);
  // Creates a variable called todos , and let's us update and append items to it using setTodos(set~Variablenameincamelcase~)
  // The useState([]) , is initialising todos to an empty array []
  const [input, setInput] = useState('');
  console.log("input value ="+input);


  const addTodo = (event) => {
    //This shows tht we clicked the button
    console.log('Button Clicked !!');
    // react refreshes the page, when we click on form's submit button. 
    // To prevent the page frm refreshing, the below code is used
    event.preventDefault(); 
    // [...todos] is showing the previous contents of the todos array using spread operator(...)
    // and, [...todos, input] is appending the value of 'input' to the previous contents of the array 'todos'
    setTodos([...todos, input]);
    //below, line clears the input field, and sets it back to empty ''
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Aman !!!</h1>

      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type='submit' onClick={addTodo}>Add ToDo</button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
