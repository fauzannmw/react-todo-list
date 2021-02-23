import ListDoDone from "./ListDoDone";
const List = ({ todos, setTodos }) => {
    return (
        <div className="list">
            <ListDoDone setTodos={setTodos} todos={todos} />
        </div>
    );
};
export default List;
