import React from "react";
const Form = ({ todos, setInput, setTodos, inputText }) => {
    function inputHandler(e) {
        setInput(e.target.value);
        console.log(inputText);
    }
    function buttonHandler(e) {
        e.preventDefault();
        setTodos((prev) => {
            return [
                ...prev,
                { todo: inputText, completed: false, id: Math.random() * 1000 },
            ];
        });
        setInput("");
        console.log(todos);
    }
    return (
        <form>
            <div className="new-item">
                <input
                    value={inputText}
                    onChange={inputHandler}
                    type="text"
                    name="new-item"
                    id="fill-item"
                    placeholder="new task"
                ></input>
                <button
                    onClick={buttonHandler}
                    type="submit"
                    className="add-item"
                >
                    + Add new task !
                </button>
            </div>
        </form>
    );
};
export default Form;
