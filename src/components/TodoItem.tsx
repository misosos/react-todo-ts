import {useState} from "react";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default function TodoItem({todo} : {todo : Todo}){
    const [checked, setChecked] = useState(false);
    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked((prev) => !prev)}
            />
            {checked ? (<span><del>{todo.text}</del></span>) : (<span>{todo.text}</span>)}<br/>
        </>
    );
}