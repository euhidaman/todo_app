import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';

/*
Note --> All the components file name starts with capital.
Example : Todo.js , App.js , Todo.css , App.css

The main reason behind this is, because, when the number of files grow in the production environment, 
then we can easily find the components file , bcz their name starts in capital
*/

//1:52:00
function App() {
  const [todos, setTodos] = useState([]);
  // Creates a variable called todos , and let's us update and append items to it using setTodos(set~Variablenameincamelcase~)
  // The useState([]) , is initialising todos to an empty array []
  const [input, setInput] = useState('');
  console.log("input value ="+input);

  //when app loads --> listen to database --> fetch new todos, as they get added/removed
  // Basic synatx of useEffect ---->
  // useEffect(() => {
  //   
  // }, dependencies)
  // if dependencies is [] , then useEffect() runs only once, tht is during the starting of the page
  // if dependencies is something else like [input], thn it keeps on looking for change in state of dependencies, 
  // in this case 'input' --> if change happens, thn it runs again
  
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      // 1:48:29
      // doc.data returns an object
      console.log(snapshot.docs.map(doc => doc.data()));
      //---------------Important--> to show from firebase db ------------------//
      // so, basically , we are setting this value -->  
      // 'snapshot.docs.map(doc => doc.data().todo)' to todos
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);


  const addTodo = (event) => {
    //This shows tht we clicked the button
    console.log('Button Clicked !!');
    // react refreshes the page, when we click on form's submit button. 
    // To prevent the page frm refreshing, the below code is used
    event.preventDefault(); 
    
    //-------------Important--> to add to firebase db -----------------//
    //The below code, takes and adds the input to the firebase db
    //so, basically it takes and updates with a new snapshot, each time an input is given 
    db.collection('todos').add({
      todo: input
    })

    //below, line clears the input field, and sets it back to empty ''
    setInput('');
  }

  return (
    <div className="App">
      <h1>⚛ React ToDo List ⚛</h1>

      <form>

        <FormControl>
          <InputLabel >✍Write a ToDo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}  />
        </FormControl>

        <Button disabled={!input} /*This tells tht, if input is blank, don't add anything to todos*/
         type='submit' onClick={addTodo} variant="contained" color="primary">
          Add ToDo
        </Button>
      </form>
      

      <ul>
        {/* The below line or map() means --> for todo in todos */}
        {todos.map(todo => (
          // the below line is passed to Todo.js, and the props passed is 'todo'
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
