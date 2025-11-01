import {useState} from "react";

export default function TodoItem({todo,onRemove} : {todo : Todo, onRemove : RemoveTodo}){
    const [checked, setChecked] = useState(false);
    return (
        <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked((checked) => !checked)}
                    className="w-4 h-4 accent-blue-500"
                />
                {checked ? (
                    <span className="text-gray-400 line-through">{todo.text}</span>
                ) : (
                    <span className="text-gray-800">{todo.text}</span>
                )}
            </div>
            <button
                type="button"
                onClick={() => onRemove(todo.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
            >
                X
            </button>
        </div>
    );
}