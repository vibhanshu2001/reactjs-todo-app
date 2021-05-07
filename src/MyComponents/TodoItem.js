import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <div>
            <div className="card my-5">
                <div className="card-header">
                <h4>{todo.title}</h4>
                </div>
                <div className="card-body">
                <p>{todo.desc}</p>
                </div>
                <div className="card-footer">
                <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
                </div>
            </div>
            
            
            
        </div>
    )
}