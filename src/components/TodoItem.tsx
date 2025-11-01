interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default function TodoItem({todo} : {todo : Todo}){
    return (
        <li>
            {todo.text}
        </li>
    );

}