import React, { useState } from "react";

function FormTodo({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		for(let i=0; i<value.length;i++){
			if(value [i] != " "){
				addTodo(value)
				setValue("");
				break;

			}
		}
	};



/*  //Forma de RegExp pasada por Adrán

    const addElement = (e) => {
        if(e.key == "Enter" && text.length > 0 && !/^\s*$/.test(text)){
            setList([...list, text])
            setText("")
        }
    }

   //Forma de RegExp adpatada??

	const handleSubmit = (e) => {
	e.preventDefault();
    if (!value.text || /^\s*$/.test(value.text)) {
		
      return;
    } 
	addTodo(value)
	setValue("");
	}
	*/


  

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group mb-3">
				<input
					type="text"
					value={value}
					className="form-control"
					placeholder="Add a task!"
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<button className="btn btn-outline-light" type="submit">
					+
				</button>
			</div>
		</form>
	);
}

export default FormTodo;