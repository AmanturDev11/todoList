/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import scss from "./Todo.module.scss";

const Todo = ({ todo, onDelete, completed }) => {
	const [itemIdCompleted, setItemIdCompleted] = useState(false);
	return (
		<div className={scss.Todo}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.card}>
							<p
								style={
									completed || itemIdCompleted
										? { textDecoration: "line-through" }
										: null
								}>
								{todo.text}
							</p>
							<MdDelete
								className={scss.MdDelete}
								onClick={() => onDelete(todo.id)}
							/>
							<input
								type="checkbox"
								onClick={() => setItemIdCompleted(!itemIdCompleted)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Todo.propTypes = {
	todo: PropTypes.shape({
		text: PropTypes.string.isRequired,
		id: PropTypes.number,
	}).isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default Todo;
