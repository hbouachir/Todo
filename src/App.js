import React ,{useState} from 'react';
import TodoItem from './component/TodoItem'
import EditTodo from './component/EditTodo'
import AddTodo from './component/AddTodo'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [tab, setTab] = useState([])
    const [text, setText] = useState('')
    const [newText, setNewText] = useState('')

    const deletebtn = id => {
        setTab(tab.filter(el => el.id !== id))
    }
    const donebtn = id => {
        setTab(tab.map(el => el.id === id ? {...el, done:!el.done} : el))
    }
    const editMode = todo => {
        setTab(tab.map(el => el.id === todo.id ? {...el, edit:true} : el))
        setNewText(todo.text)
    }
    const edit = todo => {
        setTab(tab.map(el => el.id === todo.id ? {...el, edit:false, text: newText} : el))
        setNewText('')
    }

  return (
      <div className="center">
         <AddTodo 
                tab={tab}
                setTab={x => setTab(x)}
                text={text}
                setText={x => setText(x)}
            />    
          
          
          {tab.map(el=>el.edit?

          <EditTodo todo={el}
          edit={x => edit(x)}
          setNewText={x => setNewText(x)}
          newText={newText}/>

          :
          
          <TodoItem todo={el}
          deletebtn={(x) => deletebtn(x)}
          donebtn={x => donebtn(x)}
          editMode={x => editMode(x)}/>

          

          )}
      </div>
       
  )
}

export default App;
