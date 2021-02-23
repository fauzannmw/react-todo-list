import { useState } from "react";
import Item from "./Item";

function ListDoDone({ setTodos, todos }) {
    return (
        <>
            <div className="list do">
                <h2>Do</h2>
                {todos.map((e) => {
                    if (!e.completed) {
                        return (
                            <Item
                                value={e.todo}
                                id={e.id}
                                setTodos={setTodos}
                                todos={todos}
                                todo={e}
                            />
                        );
                    }
                })}
            </div>
            <div className="list done">
                <h2>Done</h2>
                {todos.map((e) => {
                    if (e.completed) {
                        return (
                            <Item
                                value={e.todo}
                                id={e.id}
                                setTodos={setTodos}
                                todos={todos}
                                todo={e}
                            />
                        );
                    }
                })}
            </div>
        </>
    );
}
export default ListDoDone;
