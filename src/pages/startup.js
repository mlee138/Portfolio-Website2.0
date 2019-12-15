import React from 'react';
import './stylesheets/startup.css'

function Startup(){
	return (
		<div id="startup">
			<svg height="80" width="400">
				<text x="35" y="67%">Matthew Lee</text>
			</svg>
			
			<h2>Jr. Web Developer</h2>
			<br/>
			<label name="get started" htmlFor="about-btn"><span>Get Started</span></label>
		</div>
	);
}

export default Startup;