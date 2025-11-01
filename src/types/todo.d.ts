// src/types/todo.d.ts

// Todo 기본 타입
interface Todo {
    id: number;
    text: string;
    done: boolean;
}

// 할 일 추가 함수 타입
type AddTodo = (text: string) => void;

// 할 일 삭제 함수 타입
type RemoveTodo = (id: number) => void;