import TodoItem from './TodoItem.tsx';

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default function TodoList({ todos }: { todos: Todo[] }) {

    return (
        <ul>
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} />
            ))}
        </ul>
    );
}