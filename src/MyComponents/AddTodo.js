import React from "react";
import { useState } from "react";
export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description can't be blank")
        }
        props.addTodo(title, desc);
    }
  return (
    <div className="container p-3">
        <h3 className="display-4">Add your tasks here</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          
          <input
            type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
          />
          <div id="titleHelp" className="form-text">
            Enter the heading
          </div>
        </div>
        <div className="mb-3">
          
          <input
            type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
            aria-describedby="titleHelp"
          />
          <div id="titleHelp" className="form-text">
            Enter the description
          </div>
        </div>
        
        
        <button type="submit" className="btn-sm btn btn-success">
          Add Task
        </button>
      </form>
    </div>
  );
};
