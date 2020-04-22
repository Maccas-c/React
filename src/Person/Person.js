import React from "react";
import "./Person.css";
import Male from "../Person/Male";

import styled from "styled-components";

const StyledDiv = styled.div`
	width: 60%;
	margin: auto;
	border: 1px solid gray;
	box-shadow: 0 2px 3px rgb(102, 87, 87);
	padding: 16px;
	text-align: center;
	@media (min-width: 500px) {
		width: 450px;
	}
`;
const Person = props => {
	return (
		<StyledDiv>
			<p onClick={props.click}>
				I'am {props.name} and I am {props.age} years old and birthday:
				{props.birthday}
				<Male gender="male" />
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</StyledDiv>
	);
};

export default Person;
