import React from 'react';
import './stylesheets/about.css';

function AboutSlide(props){
	return(
		<section className="slide">
				<h1>{props.header}</h1>
				<img src={props.image} alt={props.alt}/>
				<p>{props.text}</p>
				<blockquote>{props.extraText}</blockquote>
		</section>
	);
}

class About extends React.Component{
	constructor(props){
		super();
		this.state = {
			color: 'color-start'
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (newColor) => {
		this.setState({ color: newColor });
	}
	render(){
		return( 
			<div id="slideshow">
				<div id="labels" className={this.state.color}>
					<hr/>
					<label htmlFor='intro' id="intro-label" className='btn' onClick={() => this.handleClick("color-intro")}><h2>Introduction</h2></label>
					<hr/>
					<label htmlFor='skills' id="skills-label" className='btn' onClick={() => this.handleClick("color-skills")}><h2>Skills</h2></label>
					<hr/>
					<label htmlFor='cat' id="cat-label" className='btn' onClick={() => this.handleClick("color-cat")}><h2>My Cat</h2></label>
					<hr/>
				</div>
				<div>
				<input id='intro' className='rad' name='rad' type='radio'/>
				<AboutSlide
					header="Introduction"
					image="../images/self.jpg"
					alt="Matt Lee"
					text="I am a Jr. Front-End Developer and a recent Binghamton University graduate. I'm based in New York City, and love with designing and building websites."/>

				<input id='skills' className='rad' name='rad' type='radio'/>
				<section className="slide">
					<h1>Skills</h1>
					<hr/>
					<div id="lists">
						<ul>
							<li>HTML</li>
							<li>CSS/SCSS</li>
							<li>JavaScript</li>
							<li>Java</li>
						</ul>
						<ul>
							<li>jQuery</li>
							<li>React</li>
							<li>Responsive Design</li>
							<li>Git</li>
						</ul>
						<ul>
							<li>Time Management</li>
							<li>Conflict Resolution</li>
						</ul>
					</div>	
				</section>

				<input id='cat' className='rad' name='rad' type='radio'/>
				<AboutSlide
					header="My Cat"
					image="../images/Ellie.jpg"
					alt="Ellie Cat"
					text="This is my cat, Ellie! She's 3 years old and her interests include sunbathing, sitting in boxes, eating chicken, and chasing laser-pointers. She also enjoys the occassional catnip."
					extraText="&quot;Meow meow? Meow. Meow meow meow!&quot;"/>
				</div>
			</div>
		);
	}
}

export default About;