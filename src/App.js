/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
	const [personsState, setPersonsState] = useState({
		persons: [
			{
				name: "Max",
				age: 28,
			},
			{ name: " Weronika", age: 21 },
			{ name: " Waldek", age: 20 },
		],
		otherState: "some other value",
	});

	const [otherState, setotherState] = useState("some other value");
	const switchNameHandler = () => {
		setPersonsState({
			persons: [
				{
					name: "Maximilian",
					age: 28,
				},
				{ name: " Weronika", age: 21 },

				{ name: " Waldek", age: 20 },
			],
		});
	};

	return (
		<div className="App">
			<h1>Hi, I'm a React App</h1>
			<p>This is really working!</p>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}
			>
				My Hobbies: Racing
			</Person>
			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			/>
		</div>
	);
};
export default app;
