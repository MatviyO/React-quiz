import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList'
import classes from './Todo.css'
import {Context} from './context'
import reducer from "./reducer";

export default function Todo() {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || [])
    const [todoTitle, setTodoTitle] = useState('')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state])

    const addTodo = event => {
        if (event.key === 'Enter') {
            dispatch({
                type: 'add',
                payload: todoTitle
            })
            setTodoTitle('')
        }
    }

    return (
        <Context.Provider valu={{
            dispatch
        }}>
            <div className={classes.Todo}>
                <div>
                    <h1>Todo app</h1>

                    <div className={classes.b}>

                        <input type="text" placeholder="Todo"
                               onKeyPress={addTodo}
                               value={todoTitle} onChange={event => setTodoTitle(event.target.value)}/>
                    </div>

                    <TodoList className={classes.Todo} todos={state}/>
                </div>
            </div>
        </Context.Provider>
    );

}
