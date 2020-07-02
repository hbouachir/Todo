import React from 'react'
import Button from 'react-bootstrap/Button';

function EditTodo({edit, setNewText, newText, todo}) {
    return (
        <div>
             <input type="text" value={newText} onChange={e => setNewText(e.target.value)}/>
            <Button onClick={() => edit(todo)} className="btn btn-xs btn-primary img-circle">Confirm</Button>
        </div>
    )
}

export default EditTodo
