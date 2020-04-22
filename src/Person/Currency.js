import React from "react";

const Currency = props => {
	return (
		<div>
			<p>
				Waluta to {props.currency} i kosztuje:
				<input type="text" value={props.value} />
			</p>
		</div>
	);
};

export default Currency;
