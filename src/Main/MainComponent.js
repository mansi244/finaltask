import React from "react";
import ProgressBar from "../components/ProgressBar";
import StarComponent from "../components/StarComponent";
import "../App.css";

export default function MainComponent() {
	return (
		<div className="container">
			<div className="progress-Conatiner">
				<div>
					<h3
						style={{
							color: "#515151",
						}}>
						Attendance
					</h3>
				</div>
				<div className="progressBar">
					<ProgressBar
						percentage={90}
						topValue="Attendance"
						bottomValue="Last"
					/>
				</div>
				<div
					style={{
						marginTop: 10,
                        textAlign:'center',
					}}>
					<pr>Last absence <br></br>12th May, 12:00 PM</pr>
				</div>
			</div>
			<div className="progress-Conatiner">
				<div>
					<h3
						style={{
							color: "#515151",
						}}>
						Tests
					</h3>
				</div>
				<div className="progressBar">
					<ProgressBar
						percentage={90}
						topValue="Tests"
						bottomValue="Last Test 100 %"
					/>
				</div>
				<div
					style={{
						marginTop: 10,
						textAlign: "center",
					}}>
					<pr>
						Last Test <br></br>100 %
					</pr>
				</div>
			</div>
			<div className="star-Conatiner">
				<div>
					<h3
						style={{
							color: "#515151",
						}}>
						HW Ratings
					</h3>
				</div>
				<StarComponent />
				<div className="StarText">
					<pr>
						Last Homework <br></br>4.5
					</pr>
				</div>
			</div>
		</div>
	);
}
