import React, { useState } from "react";
import { Rating } from "@material-ui/lab";

export default function StarComponent() {
	const [ value, setValue ] = useState(4.3);
	const [ hover, setHover] = useState(0);

	return (
		<div className="Ratings">
			<Rating
				name="hover-feedback"
				value={value}
				precision={0.1}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				onChangeActive={(event, newHover) => {
					setHover(newHover);
				}}
			/>
			<pr>(4.1)</pr>
		</div>
	);
}
