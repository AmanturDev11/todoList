import { useState } from "react";
import { generated } from "../utils";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import TodoList from "./TodoList";
import scss from "./TodoWrapper.module.scss";
import imgDelete from "../assets/images/delete.png";

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [completed, setCompleted] = useState(false);

	const handleDelete = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const handleDeleteAll = () => {
		setTodos([]);
	};

	const addTodoHandler = (text) => {
		const newTodo = {
			text,
			id: generated(),
		};

		setTodos((prev) => [...prev, newTodo]);
	};

	return (
		<div className={scss.TodoWrapper}>
			<div className="container">
				<div className={scss.content}>
					<h1>TODO-LIST</h1>
					<TodoForm
						onAddTodo={addTodoHandler}
						setCompleted={setCompleted}
						completed={completed}
					/>
					{todos.length === 0 ? (
						<div>пока нету</div>
					) : (
						<Todos>
							<TodoList
								completed={completed}
								todos={todos}
								onDelete={handleDelete}
							/>
							<div className={scss.card_btn}>
								<button onClick={handleDeleteAll}>
									<img src={imgDelete} alt="" />
								</button>
							</div>
						</Todos>
					)}
				</div>
			</div>
		</div>
	);
};

export default TodoWrapper;
