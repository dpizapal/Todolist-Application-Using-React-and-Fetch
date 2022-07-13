import React from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
	return (
		<div>
			<span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
				{todo.text}
			</span>
			<div>
				<button
					className="btn btn-success mx-2"
					onClick={() => markTodo(index)}>
					✓
				</button>
				<button
					className="btn btn-danger mx-2"
					onClick={() => removeTodo(index)}>
					✕
				</button>
			</div>
		</div>
	);
}

export default Todo;
