import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className="container text-center">
            <h3 className="my-3 display-4">Todos List</h3>
            {props.todos.length === 0 ? <div className="alert alert-danger" role="alert">
                Nothing to display
        </div> :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }

        </div>
    )
}
