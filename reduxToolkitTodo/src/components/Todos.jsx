import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEditing = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const saveEdit = (id) => {
        dispatch(updateTodo({ id, text: editText }));
        setEditingId(null);
        setEditText('');
    };

    return (
        <>
            <div className="text-xl font-bold mb-4">Todos</div>
            <ul className="list-none p-0">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editingId === todo.id ? (
                            <input
                                type="text"
                                className="text-white bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <div className='text-white'>{todo.text}</div>
                        )}
                        <div className="flex space-x-2">
                            {editingId === todo.id ? (
                                <button
                                    onClick={() => saveEdit(todo.id)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    Save
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => startEditing(todo.id, todo.text)}
                                        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 5.487l-9.865 9.866c-.39.39-.863.688-1.39.88l-3.11.982a.75.75 0 0 1-.963-.963l.982-3.11c.192-.527.49-1 .88-1.39l9.866-9.865a2.25 2.25 0 1 1 3.182 3.182zM19.5 6.75l-1.243 1.243"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
