import React from "react";
import "./Person.css";
import Male from "../Person/Male";
import Radium from "radium";
const Person = props => {
	return (
		<div className="Person">
			<p onClick={props.click}>
				I'am {props.name} and I am {props.age} years old and birthday:
				{props.birthday}
				<Male gender="male" />
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default Radium(Person);
