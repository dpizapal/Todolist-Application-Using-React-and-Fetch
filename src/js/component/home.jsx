import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};



fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
		if (resp.ok ==true) {
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

export default Home;
