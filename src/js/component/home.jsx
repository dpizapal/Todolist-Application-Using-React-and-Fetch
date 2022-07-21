import React, { useState, useEffect } from "react";
import FormTodo from "./formtodo";
import Todo from "./todo";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");


	const addTodo = (value) => {
		
			let aux = [...todos, { label: value, done: true }]
			setTodos(aux);
			setTask("");
			fetchLista(aux)
		
	}

	// Post Fefch, crear User

	const createUser = async () => {
		await fetch(
			'https://assets.breatheco.de/apis/fake/todos/user/dpizapal',
			{
				method: "POST",
				
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify([])
			}
		)
			.then(resp => {
				if (resp.ok)
					getData();

				return resp.json();
			})
			
			.catch(error => {
				alert(error)
			})
	}

	//Get Fetch


	const getData = () => {
		fetch(
			'https://assets.breatheco.de/apis/fake/todos/user/dpizapal',
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then(resp => {

				if (!resp.ok)
					throw new Error("User don't exist");


				return resp.json();
			})
			.then(data => {
				setTodos(data)
				
			})
			.catch(error => {
				createUser()
				console.log(error)
			})

	};

	//Put Fetch

	const fetchLista = async (newData) => {
		const resp = await fetch(
			'https://assets.breatheco.de/apis/fake/todos/user/dpizapal',
			{
				method: "PUT",
				
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newData)
				//Transforma de objeto a JSON
				

				
			})
			.then(resp => {

				if (!resp.ok)
					throw new Error("User don't exist");


				return resp.json();
			})
			.then(data => {
				console.log(data)
				getData()
				
			})
			.catch(error => {
				createUser()
				console.log(error)
			})

		;
	};


	useEffect(() => {
		getData()
	}, []);

	//Función marcar

	const markTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};
	//Función eliminar

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
		if (newTodos.length == 0)
			nukeToDo ();
		else 
			fetchLista (newTodos)
	};

	//Función eliminar todo

	const nukeToDo = ()=>{
		fetch ('https://assets.breatheco.de/apis/fake/todos/user/dpizapal', {
			method: "DELETE",
			headers: {
				"Content-type": "application/json"
			},
		})
		.then(resp=>{
			if(resp.ok){
				createUser()
			}
		})
	}

	return (

		<div id="Box" className="container border rounded border-dark  text-center  mt-5 pt-2 pb-4">
			<h2 className="fw-light mt-2">What's the Plan for Today?</h2>
			<h3 className="fw-light mt-3 rounded">Tasks: {todos.length}</h3>
			<FormTodo addTodo={addTodo} />
			<div className="todo-app">
				{todos.map((todo, index) => (
					<Todo
						id="tasks"            
						value={task}
						key={index}
						index={index}
						todo={todo}
						markTodo={markTodo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
			<button className="nuke" onClick={()=>nukeToDo()}>Delete Everything</button>
		</div>

	);
};

export default Home;


