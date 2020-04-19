import React from "react";
import "./Person.css";
const Person = props => {
	return (
		<div className="Person">
			<p onClick={props.click}>
				I'am {props.name} and I am {props.age} years old and birthday{" "}
				{props.birthday}
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
			<input type="text" onChange={props.changed_1} value={props.age} />
		</div>
	);
};

export default Person;
