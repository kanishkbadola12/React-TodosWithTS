import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext)
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoInputRef.current!.value;

        if (enteredText.trim().length == 0) {
            return;
        }

        todoCtx.addTodo(enteredText);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="todoText">Todo Text</label>
            <input type="text" id="todoText" ref={todoInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;