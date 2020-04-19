import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{
				name: "Max",
				age: 28,
			},
			{ name: " Marry", age: 21 },

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
	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={() => this.switchNameHandler(`Waldek`)}>
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
