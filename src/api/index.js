import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList()  {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    axios
      .get('http://localhost:3001/todos')
      .then((response) => {
        console.log(response.data)
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.todo}
          <p>{todo.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
