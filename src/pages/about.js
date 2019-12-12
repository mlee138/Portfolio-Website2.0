import React from 'react';
import './stylesheets/about.css';
import './stylesheets/banner.css';

function AboutSection(props){
	return(
		<section className="about-section">
			<img src={props.image} alt={props.alt} />
			<div className="overlay">
				<p>{props.text}</p>
			</div>
		</section>
	);
}

function AboutSlide(props){

}

class About extends React.Component{
	render(){
		return( 
			<div id="about">
				<h2 className="banner">About Me</h2>
				<p>I am a Jr. Front-End Developer, based in New York City, who is in love with designing and programming websites.</p>
				<div className="about-row">
					<AboutSection 
						image="images/skills.jpg"
						alt="Skills"
						text="Skills: HTML, CSS, JavaScript, Java, jQuery, React, responsive design, Git, teamwork, and time management"/>
					<AboutSection 
						image="images/Ellie.jpg"
						alt="My Cat Ellie"
						text="This is my cat, Ellie! She's 3 years old and her interests include sunbathing, sitting in boxes, eating chicken, and chasing laser-pointers. She also enjoys the occassional catnip. &quot;Meow meow? Meow. Meow meow meow!&quot;"/>
				</div>
			</div>
		);
	}
}

export default About;