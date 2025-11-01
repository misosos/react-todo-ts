import {useState} from "react";

export default function TodoItem({todo,onRemove} : {todo : Todo, onRemove : RemoveTodo}){
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