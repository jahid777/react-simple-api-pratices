


import React, { useEffect, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
  },[])
  return (
    <div>
        {
          
        todos.map(res => <li> {res.title}</li> )
         
        }
         
    </div>
  );
};

export default App;