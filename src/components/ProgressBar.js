import React from "react";
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from './AnimatedProgressProvider';
import {
	easeBackInOut,
	easeCircle,
	easeQuad,
	easeQuadIn,
	easeQuadInOut,
	easeSin,
} from "d3-ease";


export default function ProgressBar({percentage}) {
	return (
		<div style={{ padding: "40px 40px 40px 40px" }}>
			<div
				style={{
					alignItems: "center",
				}}>
				<AnimatedProgressProvider
					valueStart={0}
					valueEnd={percentage}
					duration={3}
					easingFunction={easeQuadIn}>
					{(value) => {
						const roundedValue = Math.round(value);
						return (
							<CircularProgressbar
								value={value}
								text={`${roundedValue}%`}
								styles={buildStyles({
									pathTransition: "none",
									strokeLinecap: "butt",
									textColor: "#515151",
									pathColor: "#0047B1",
								})}
								strokeWidth={15}
							/>
						);
					}}
				</AnimatedProgressProvider>
			</div>
		</div>
	);
}
