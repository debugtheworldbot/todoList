import * as React from "react";
import Form from './form'
import {useState} from "react";


function App() {
    const [todos, setTodos] = useState([])
    const toggleComplete = (i) => {
        setTodos(todos.map((todo, k) => i === k ? {...todo,complete: !todo.complete} : todo))
    }


    return (
        <div className="App">
            <Form onSubmit={(text) => setTodos([{text, complete: false}, ...todos])}/>
            <div>
                {todos.map(({text, complete}, i) =>
                    <div style={{textDecoration: complete ? 'line-through' : ''}} key={i}
                         onClick={() => toggleComplete(i)}>{text}</div>)}
            </div>
            <button onClick={()=>setTodos([])}> reset</button>
        </div>
    );
}

export default App;
