/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Todo from "./Todo";
import scss from "./TodoList.module.scss";

const TodoList = ({ todos, onDelete, completed }) => {
	return (
		<div className={scss.TodoList}>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					onDelete={onDelete}
					completed={completed}
				/>
			))}
		</div>
	);
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
		})
	).isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default TodoList;
