
import React,{useState} from 'react';
export const AddTodo = (props) => {
    const [title,setTitle]= useState ("");
    const [desc, setDesc]= useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description connot be blank")
        }
        else{
        props.addTodo(title,desc);
       setTitle("");
       setDesc("");
        }
    }
  return (
    <div classNameName="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your todo with any one
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
