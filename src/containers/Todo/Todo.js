import React, {useState} from 'react'
import TodoList from './TodoList'
import classes from './Todo.css'

export default function Todo() {
    const [todos, setTodos] = useState([
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: true},
    ])
    const [todoTitle, setTodoTitle] = useState('')
    const addTodo = (event) => {
        if (event.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(), title: todoTitle, completed: false
                }
            ])
            setTodoTitle('')
        }
    }
        return (
            <div className={classes.Todo}>
                <div>
                <h1>Todo app</h1>

                <div className={classes.b}>

                    <input type="text"  placeholder="Todo"
                           onKeyPress={addTodo}
                           value={todoTitle} onChange={event => setTodoTitle(event.target.value)}/>
                </div>

                <TodoList className={classes.Todo} todos={todos} />
                </div>
            </div>
        );

}
