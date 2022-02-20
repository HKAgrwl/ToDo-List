import React from 'react';
import Todo from './Todo';

export default function ToDoList({ todos, setTodos, filteredTodos }) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo
                            text={todo.text}
                            key={todo.id}
                            setTodos={setTodos}
                            todo={todo}
                            todos={todos}
                            filteredTodos={filteredTodos} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
