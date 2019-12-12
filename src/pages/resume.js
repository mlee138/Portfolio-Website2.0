import React from 'react';
import './stylesheets/resume.css';

class Resume extends React.Component{
	render(){
		return(
			<div id="resume">
				<h2 className="banner">Resume</h2>
		    	<embed src="images/Matthew_Lee_Resume_Fall_2019.pdf"/>
			</div>
		);
	}
}

export default Resume;