import React, { ReactNode, useState } from "react";
import Todo from "../models/Todo";

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: () => { }
});

const TodosContextProvider: React.FC<{ children: ReactNode}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos(prevState => (
            [...prevState, newTodo]
        ))
    };

    const removeTodoHandler = (id: string) => {
        setTodos(prevState => (
            prevState.filter(todo => todo.id !== id)
        ))
    };
    
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={ contextValue }>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;


