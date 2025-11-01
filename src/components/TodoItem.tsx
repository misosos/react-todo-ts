import {useState} from "react";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default function TodoItem({todo,onRemove} : {todo : Todo,onRemove : (id: number) => void}){
    const [checked, setChecked] = useState(false);
    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked((checked) => !checked)}
            />
            {checked ? (<span><del>{todo.text}</del></span>) : (<span>{todo.text}</span>)}
            <button type="button" onClick={() => onRemove(todo.id)}>X</button>
            <br/>
        </>
    );
}