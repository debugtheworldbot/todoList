import * as React from "react";
import Form from './form'
import {useState} from "react";


function App() {
    const [todos, setTodos] = useState([])

    return (
        <div className="App">
            <Form onSubmit={(text) => setTodos([{text, complete: false}, ...todos])}/>
            {todos.map(({text,complete}) => (<div key={text} >{text}</div>))}
        </div>
    );
}

export default App;
