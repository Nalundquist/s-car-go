import React from "react";
import App from "./App";
import snail from ".././img/S-Car-Go.png";

function Header(){
	const headStyle = {
		padding: "35px",
		border: "3px solid dark gray"
	}

	const imgbox = {
		margin: "5px",
		align: "left",
		position: "relative",
		width: "150px",
		height: "150px"
	}

	const textbox = {
		align: "right",
		position: "relative"
	}

	return(
	<React.Fragment>
		<div style={headStyle}>
			<div style={imgbox}>
				<img src={snail} alt="snail racer" width="100%" />
			</div>
			<div style={textbox}>
				<h2>S-CAR-GO</h2>
				<h4><em>Your source for info on blazing fast competition</em></h4>
			</div>
		</div>
	</React.Fragment>
	)
}

export default Header;