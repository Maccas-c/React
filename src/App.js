import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{
				name: "Manu",
				age: 28,
			},
			{ name: " Weronika", age: 21 },

			{ name: " Waldek", age: 20 },
		],
		otherState: "Some other value",
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

	ageChangedHandler = event => {
		this.setState({
			persons: [
				{
					name: "Manu",
					age: 28,
				},
				{ name: "Weronika", age: event.target.value },

				{ name: " Waldek", age: 20 },
			],
		});
	};
	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: " solid blue",
			padding: "5px",
			cursor: "pointer",
		};
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button
					style={style}
					onClick={() => this.switchNameHandler(`Waldek`)}
				>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, "Max!")}
					changed={this.nameChangedHandler}
					changed_1={this.ageChangedHandler}
				>
					My Hobbies: Racing
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
