import TodoItem from './TodoItem.tsx';

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default function TodoList({ todos, onRemove }: { todos: Todo[] , onRemove : RemoveTodo}) {

    return (
        <ul>
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} onRemove={onRemove} />
            ))}
        </ul>
    );
}