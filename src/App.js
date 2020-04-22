import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Currency from "./Person/Currency";
class App extends Component {
	state = {
		persons: [
			{ id: "asfa1", name: "Max", age: 28 },
			{ id: "vasdf1", name: "Manu", age: 29 },
			{ id: "asdf11", name: "Stephanie", age: 26 },
			{ id: "assdf11", name: "Waluniu", age: 22 },
		],
		otherState: "some other value",
		showPersons: false,
		showcurrency: false,
		currency: [
			{ id: "asdf1212", currency: "EURO", prize: 5 },
			{ id: "asdf1212", currency: "USD", prize: 4.5 },
			{ id: "asdf1212", currency: "FUNT", prize: 6 },
		],
		showbutton: false,
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex],
		};

		// const person = Object.assign({}, this.state.persons[personIndex]);

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	};

	// deletePersonHandler = personIndex => {
	// 	// const persons = this.state.persons.slice();
	// 	const persons = [...this.state.persons];
	// 	persons.splice(personIndex, 1);
	// 	this.setState({ persons: persons });
	// };

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	toggleCurrencyHandler = () => {
		const doesShow = this.state.showcurrency;
		this.setState({ showcurrency: !doesShow });
	};

	togglePersonCurrencyHandler = () => {};
	render() {
		const style = {
			backgroundColor: "green",
			color: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer",
			// ":hover": {
			// 	backgroundColor: "lightgreen",
			// 	color: "black",
			// },
		};
		let currency = null;

		if (this.state.showcurrency) {
			currency = (
				<div>
					{this.state.currency.map(currency => (
						<Currency
							currency={currency.currency}
							value={currency.prize}
							key={currency.id}
						/>
					))}
				</div>
			);
		}

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								// click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={event =>
									this.nameChangedHandler(event, person.id)
								}
							/>
						);
					})}
				</div>
			);
			style.backgroundColor = "red";
			style[":hover"] = {
				backgroundColor: "salmon",
				color: "black",
			};
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push("red"); // classes = ['red]
		}
		if (this.state.persons.length <= 1) {
			classes.push("bold"); // classes = ['red,'bold]
		}
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(" ")}>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons/Currenc
				</button>
				<button style={style} onClick={this.toggleCurrencyHandler}>
					Toggle Currency
				</button>

				{persons}
				{currency}
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;
