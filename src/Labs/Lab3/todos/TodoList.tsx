import TodoItem from "./TodoItem";
import todosData from "./todos.json";


type Todo = {
  title: string;
  status: string;
  done: boolean;
};

const todos: Todo[] = todosData as Todo[];

const TodoList = () => {
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map((todo: Todo, index: number) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
}
export default TodoList;