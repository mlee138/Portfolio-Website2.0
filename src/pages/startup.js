import React from 'react';
import './stylesheets/startup.css'

function Startup(){
	return (
		<div id="startup">
			<img src="images/self.jpg"/>
			<h1><span>Matthew</span> Lee</h1>
			<h2>Jr. Front-End Developer</h2>
			<br/>
			<label name="get started" htmlFor="about-btn"><span>Get Started</span></label>
		</div>
	);
}

export default Startup;