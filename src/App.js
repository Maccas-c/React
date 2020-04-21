import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import Male from "./Person/Male";
class App extends Component {
	state = {
		persons: [
			{
				name: "Manu",
				age: 28,
				birthday: "20.01.1998",
			},
			{ name: " Weronika", age: 21 },

			{ name: " Waldek", age: 20 },
		],
		otherState: "Some other value",
		showPersons: false,
	};
	switchNameHandler = newName => {
		// console.log("Was Clicked!");
		//don't do this this.state.persons[0].name = "Maximilian";
		this.setState({
			persons: [
				{
					name: newName,
					age: 28,
				},
				{ name: " Weronika", age: 21 },

				{ name: " Waldek", age: 20 },
			],
		});
	};

	nameChangedHandler = event => {
		this.setState({
			persons: [
				{
					name: "Manu",
					age: 28,
				},
				{ name: event.target.value, age: 21 },

				{ name: " Waldek", age: 20 },
			],
		});
	};

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};
	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: " solid blue",
			padding: "5px",
			cursor: "pointer",
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(person => {
						return <Person name={person.name} age={person.age} />;
					})}
				</div>
			);
		}
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button style={style} onClick={this.togglePersonHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
