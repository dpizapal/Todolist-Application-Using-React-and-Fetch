import React from "react";
import { useState } from "react";
//import { useState, useEffect } from "react";    Sustituiría a la línea 2 para meter UseEffect
import FormTodo from "./formtodo";
import Todo from "./todo";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	//const [task, setTask] = useState("");
	//const [firstRender, setFirstRender] = useState(false); 

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
	
		setTodos(newTodos);

	// Esta función addTodo sustituiría a la anterior de la línea 13, mete done y label
/* 	const addTodo = (event) => {
	if (event.key === "Enter") {
			setTodos([...todos, { label: task, done: true }]);
			setTask("");
		}
}


	//Get Fetch
	useEffect(() => {
		setFirstRender(true);
		fetchTask();
	}, []);

	const fetchTask = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/dpizapal",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		//Transforma de JSON a objeto
		const tasks = await response.json();
		setTodos(tasks);
	};

	//Put Fetch
	useEffect(() => {
		if (firstRender) {
			fetchLista();
		}
	}, [todos]);

	const fetchLista = async () => {
		const resp = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/dpizapal",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				//Transforma de objeto a JSON
				body: JSON.stringify(todos),
			}
		);
	};




    //Ejercicio copiado de la lección del 4geeks

	/*
	fetch('https://assets.breatheco.de/apis/fake/todos/user/dpizapal', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
		if (resp.ok == true) {
			console.log("El request se hizo bien"); // Será true (verdad) si la respuesta es exitosa.
			return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		}
		else if(resp.status >=200 && resp.status < 500) {
			console.log(`Hubo un error ${resp.status} en el request`); // el código de estado = 200 o código = 400 etc.
		}
        
        
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        
    })
    .then(data => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log("Este es el body del request", data); //esto imprimirá en la consola el objeto exacto recibido del servidor
		let html = data.map (FormTodo=> "<li>"+FormTodo.label+"/li").join("");
		html= "<ul>"+hmtl+"</ul";
		console.log(html);
		document.getElementById("app").innerHTML = html;
    })
    .catch(error => console.error('Error: ', error));         //manejo de errores 

	

*/

	};

	const markTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};




	return (
		
		<div id="Box" className="container border rounded border-dark bg-secondary text-center  mt-5 pt-2 pb-4">
			<h2 className="fw-light mt-2">What's the Plan for Today?</h2>
			<h3 className="fw-light mt-3 rounded">Tasks: {todos.length}</h3>
			<FormTodo addTodo={addTodo} />
			<div className="todo-app">
				{todos.map((todo, index) => (
					<Todo
					//	id="tasks"             Descomentar para que tenga un value y un id
					//	value={task}
						key={index}
						index={index}
						todo={todo}
						markTodo={markTodo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
		
	);
};

export default Home;


