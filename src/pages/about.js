import React from 'react';
import './stylesheets/about.css';

class About extends React.Component{
	constructor(props){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (newColor) => {
		this.setState({ color: newColor });
	}


	render(){
		return( 
			<div id="about">
				<div id="intro-container">
					<h1 className="unselectable">M</h1>
					<div id="blocks">
						<div className="block animatedLeft"></div>
						<div className="block animatedRight"></div>
						<div className="block animatedLeft"></div>
						<div className="block animatedRight"></div>
						<div className="block animatedLeft"></div>
						<div className="block animatedRight">
							<p>Jr. Front End Developer</p>
							<a href="#section-container"><span>Get Started</span></a>
							</div>
						<div className="block animatedLeft"></div>
					</div>		
				</div>
				<div id="section-container">
					<h2 id="begin" className="banner">About</h2>
					<section className="wrap">
						<div className="about-image-container">
							<img src="/images/self.jpg" alt="Matt"/>
							<span></span>
						</div>
						<div id="self-text">
							<p>I am a Jr. Front-End Developer and a recent Binghamton University graduate. I'm based in New York City, and love designing and building websites.</p>
							<div><pre>HTML     Time Management     CSS     Responsive Design      JavaScript     Sass     Git      React     jQuery     Teamwork     Critical Thinking</pre></div>
						</div>
					</section>
					<div className="line"></div>
					<section className="wrap-reverse">
						<div>
						<p id="cat-text">This is my cat, Ellie! She's 3 years old and her interests include sunbathing, sitting in boxes, eating chicken, and chasing laser-pointers. She also enjoys the occasional catnip.</p>
						<q id="cat-quote">Meow, meow meow? Meow. Meow meow meow! -Ellie</q>
						</div>
						<div className="about-image-container">
							<img src="/images/Ellie.jpg" alt="My Cat Ellie"/>
							<span></span>
						</div>
					</section>
					
				</div>
				<div>
					
				</div>
			</div>
		);
	}
}

export default About;