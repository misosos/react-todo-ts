import {useState,useRef} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const nextId = useRef(1);
    const handleAdd = (text: string) => {
        setTodos((prev) => [...prev, {
            id: nextId.current++,
            text, done: false
        }]);
    };

    return (
        <TodoTemplate>
            <h1>Todo List</h1>
            <TodoInsert onAdd={handleAdd}/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}