import PropTypes from "prop-types";
import scss from "./Todos.module.scss";

const Todos = ({ children }) => {
	return <div className={scss.Todos}>{children}</div>;
};

Todos.propTypes = {
	children: PropTypes.node,
};

export default Todos;
