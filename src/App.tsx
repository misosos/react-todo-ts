import {useState,useRef} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const nextId = useRef(1);

    const handleAdd : AddTodo = (text) => {
        setTodos((prev) => [...prev, {
            id: nextId.current++,
            text, done: false
        }]);
    };

    const handleRemove : RemoveTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoTemplate>
            <h1>Todo List</h1>
            <TodoInsert onAdd={handleAdd}/>
            <TodoList todos={todos} onRemove={handleRemove}/>
        </TodoTemplate>
    );
}