import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./components/List";
import Form from "./components/Form";

function App() {
    let [inputText, setInput] = useState("");
    let [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <Nav />
            <div className="container">
                <Form
                    setInput={setInput}
                    inputText={inputText}
                    setTodos={setTodos}
                    todos={todos}
                />
                <List setTodos={setTodos} todos={todos} />
            </div>
        </div>
    );
}

export default App;
