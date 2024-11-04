"use client";
import { Todo, addTodo, deleteTodo, toggleTodo } from "@/utils/supabase/operations";
import { useState } from "react";

export function TodoList({ todos: initialTodos }: { todos: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = async () => {
    if (newTodo.trim() === '') return;
    const newTask = await addTodo(newTodo);
    if (newTask) {
      setTodos([newTask, ...todos]); 
    }
    setNewTodo(''); 
  };

  
  const handleToggleTodo = async (id: string, isComplete: boolean) => {
    const updatedTodo = await toggleTodo(id, !isComplete);
    if (updatedTodo) {
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    }
  };

  
  const handleDeleteTodo = async (id: string) => {
    const success = await deleteTodo(id);
    if (success) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };


  return (
    <div className="max-w-md mx-auto p-6  shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <span
              onClick={() => handleToggleTodo(todo.id, todo.is_complete)}
              className={`cursor-pointer flex-grow ${
todo.is_complete ? 'line-through text-gray-500' : 'text-gray-800'
}`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}
