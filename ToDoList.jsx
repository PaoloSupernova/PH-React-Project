import React, { useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      setError('This To Do item must not be blank.');
      return;
    }

    if (inputValue.length > 255) {
      setError('This To Do item must be less than 255 characters.');
      return;
    }

    if (todos.includes(inputValue)) {
      setError('Duplicate To Do items are not allowed.');
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue('');
    setError('');
  };

  const handleDeleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      <ul className="list-disc">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2 text-gray-700 flex justify-between items-center">
            {todo}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
