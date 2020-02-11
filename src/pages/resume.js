import React from 'react';
import './stylesheets/resume.css';

class Resume extends React.Component{
	render(){
		const resume = "images/Matthew_Lee_Resume_2020.pdf";
		return(
			<div id="resume">
				<h2 className="banner">Resume</h2>
		    	<embed src={resume} />
				<a href={resume} download>Click to Download</a>
			</div>
		);
	}
}

export default Resume;