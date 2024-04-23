/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import scss from "./TodoForm.module.scss";
// import Input from "@mui/joy/Input";
import img from "../assets/images/Book_designed_by_Benny_Forsberg_from_the_Noun_Project_-_with_lines.svg.png";

const TodoForm = ({ onAddTodo, completed, setCompleted }) => {
	const [value, setValue] = useState("");
	const [errorText, setErrorText] = useState(false);

	console.log(value);

	const submitHandeler = (e) => {
		e.preventDefault();
		if (value.trim() === "") {
			setValue == !"Поле не должно быть пустым!";
		} else {
			onAddTodo(value);
			setValue("");
			setErrorText(null);
		}
		// onAddTodo(value);
		// setValue("");
		// onAddTodo(value);
		// setErrorText(null);
	};

	return (
		<div className={scss.TodoForm}>
			<form onSubmit={submitHandeler}>
				<div className={scss.content}>
					<input
						className={scss.classInput}
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder="text"
					/>
					<div className={scss.card_btn}>
						<button type="submit">
							<img src={img} alt="" />
						</button>
					</div>
					<div className={scss.cardFlex}>
						<h4>Все</h4>
					<input type="checkbox" onClick={() => setCompleted(!completed)} />
					</div>
					{errorText && <p>{errorText}</p>}
				</div>
			</form>
		</div>
	);
};

TodoForm.propTypes = { onAddTodo: PropTypes.func.isRequired };

export default TodoForm;
