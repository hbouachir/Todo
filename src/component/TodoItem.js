import React from 'react'
import Button from 'react-bootstrap/Button';

function TodoItem({donebtn, deletebtn, editMode, todo}) {
    return (
        <div>
        <p style={{textDecoration:todo.done?"line-through":"none"}}>{todo.text}</p>
        <Button onClick={() => donebtn(todo.id)} className="btn btn-xs btn-success img-circle">&#x2713;</Button>
            <Button onClick={() => deletebtn(todo.id)}className="btn btn-xs btn-danger img-circle">&#xff38;</Button>
            <Button onClick={() => editMode(todo)} className="btn btn-xs btn-primary img-circle">Edit</Button>
         </div>
    )
}

export default TodoItem
//{todo.done ? 'Undone' : 'Done'}