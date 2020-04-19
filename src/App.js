import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

function App() {
	return (
		<div className="App">
			<h1>Hi, I'm a React App</h1>
			<p>This is really working!</p>
			<Person name="Max" age="28" />
			<Person name="Waldek" age="21" birthday="21.04.2019">
				My Hobbies: Racing
			</Person>
			<Person name="Maria" age="22" />
		</div>
	);
}

export default App;
