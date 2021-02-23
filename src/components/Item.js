const Item = ({ value, id, todos, setTodos, todo }) => {
    function deleteHandler() {
        console.log("pressed");
        setTodos(todos.filter((a) => a.id !== id));
    }
    function checkboxHandler(e) {
        if (e.target.checked) {
            setTodos(
                todos.map((item) => {
                    if (id == item.id) {
                        return {
                            ...item,
                            completed: true,
                        };
                    }
                    return item;
                })
            );
        } else {
            setTodos(
                todos.map((item) => {
                    if (id == item.id) {
                        return {
                            ...item,
                            completed: false,
                        };
                    }
                    return item;
                })
            );
        }
    }
    return (
        <div className="item">
            <div>
                <input
                    checked={todo.completed}
                    onChange={checkboxHandler}
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                ></input>
                <span className={`${todo.completed ? "completed" : ""}`}>
                    {value}
                </span>
            </div>
            <button onClick={deleteHandler} className="delete-item">
                Delete
            </button>
        </div>
    );
};
export default Item;
