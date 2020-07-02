import React from 'react'
import Button from 'react-bootstrap/Button';

import '../App.css';


function AddTodo({text, setTab, setText, tab}) {
    return (



        <div  style={{
            height:'300px',
            width:"100%",
            backgroundColor:"black",
            
           
        }}>

<input center center type="text" onChange={e => setText(e.target.value)} value={text}/>{'   '}
  <Button variant="warning" size="sm" active onClick={
                () => {
                    text &&
                    setTab([...tab, {id: tab.length, text, done: false, edit: false}])
                    setText('')
                }
            }>
    Add a Task
  </Button>



        </div>
    )
}

export default AddTodo
/*
         <input type="text" onChange={e => setText(e.target.value)} value={text}/>
            <Button className="btn btn-xs btn-warning img-circle" onClick={
                () => {
                    text &&
                    setTab([...tab, {id: tab.length, text, done: false, edit: false}])
                    setText('')
                }
            }
            >
            Add a Task
            </Button>   */