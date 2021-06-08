import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import {Button} from "react-bootstrap";
import "../components/LeftSection.css";

function LeftSection() {
	return (
		<div className="section__1">
			<h1 className="section1__h1">Batch Name | PHY 1</h1>
			<EditIcon className="section1__Icon" />
			<AccountBoxIcon className="section1__Account" />
			<h1 className="section1__name">Bidit Mangal</h1>
			<GroupAddIcon className="section1__group" fontSize="large" />
			<AccountCircleIcon className="section1__circle" />
			<h1 className="section1__student">125 Students</h1>
			<TimelapseIcon className="section1__timelapse" />
			<h1 className="section1__activity">
				Upcoming {`< Activity >`}<br></br>Thus, 25th May <br></br>12:00 pm to
				12:00 am
			</h1>
			<Button variant="outline-primary" className="section1__button">
				View
			</Button>
		</div>
	);
}

export default LeftSection;
