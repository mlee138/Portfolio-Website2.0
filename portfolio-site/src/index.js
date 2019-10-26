import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './about.css'
import './portfolio.css'
import './resume.css'
import './contact.css'

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			currentContent: "start"
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(a) {
		var newState = {};
		newState["currentContent"] = a;
		this.setState(newState);
	}



	render(){
		return(
		<div>
			<nav>
				<a id="icon" href="https://www.linkedin.com/in/matthewlee1297/" target="_blank" rel="noopener noreferrer"><img id="face-logo" src="Matt_Lee_Icon.ico" alt="Matt Lee Face Icon" /></a>
				<NavigationButtons Id="desktop-nav" handleClick={this.handleClick}/>
				<div id="dropdown">
					<span>=</span>
					<NavigationButtons Id="" handleClick={this.handleClick}/>
				</div>
			</nav>
			<main>
				<ChooseContent content={this.state.currentContent}/>
			</main>
		</div>
		);
	}
}

class NavigationButtons extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			about: false,
			portfolio: false,
			resume: false,
			contact: false
		};

		this.handleClickData = this.handleClickData.bind(this);
	}

	handleClickData(data){
		var updateState = {};
		updateState[data] = true;
		this.setState(updateState);
		this.props.handleClick(data);
	}

	render(){
		var aboutClasses, portfolioClasses, resumeClasses, contactClasses;
		(this.state.about ? aboutClasses='color' : aboutClasses=undefined);
		(this.state.portfolio ? portfolioClasses='color' : portfolioClasses=undefined);
		(this.state.resume ? resumeClasses='color' : resumeClasses=undefined);
		(this.state.contact ? contactClasses='color' : contactClasses=undefined);
		return(
			<ul id={this.props.Id}>
				<li>
					<button	
						onClick={this.handleClickData.bind(this, "about")}>
						<img className={aboutClasses}  src="Background-1.jpg" alt="About me" />
					</button></li>
				<li>
					<button
						onClick={this.handleClickData.bind(this, "portfolio")}>
						<img className={portfolioClasses} src="Background-2.jpg" alt="Portfolio" />
					</button></li>
				<li>
					<button
						onClick={this.handleClickData.bind(this, "resume")}>
						<img className={resumeClasses} src="Background-3.jpg" alt="Resume" />
					</button></li>
				<li>
					<button
						onClick={this.handleClickData.bind(this, "contact")}>
						<img className={contactClasses} src="Background-4.jpg" alt="Contact" />
					</button></li>
			</ul>
		);
	}
}

function Startup(){
	return (
		<div id="startup">
			<p>^--- that's me</p>
			<h1>Hi there! I'm Matthew Lee.<br/><br/>Choose a section to learn more about me.</h1>
		</div>
	);
}

function ChooseContent(props){
	const content = props.content;
	switch(content){
		case 'about':
			return <About/>;
		case "portfolio":
			return <Portfolio/>;
		case "resume":
			return <Resume/>;
		case "contact":
			return <Contact/>;
		default:
			return <Startup/>;
	}
}

// ===========================================
/*
class Banner extends React.Component{
	render(){
		return(
			<img id="banner" src={this.props.banner} alt={this.props.alt}/>
		);
	}
}
*/
// ===========================================

class AboutSection extends React.Component{
	render(){
		return(
			<section className="about-section">
				<img src={this.props.image} alt={this.props.alt} />
				<div className="overlay">
					<p>{this.props.text}</p>
				</div>
			</section>
		);
	}
}

class About extends React.Component{
	render(){
		return( 
			<div id="about">
				<div className="about-row">
				<AboutSection 
					image="images/Linkedin.jpg"
					alt="Matt Lee, that's me"
					text="Hi, my name is Matthew Lee. I've recently graduated from Binghamton University and am now back in New York City. Through clear, simple designs and pixel perfect work, I want to take my web development skills to the next level." />
				<AboutSection 
					image="images/apparel_1.png"
					alt="Skills"
					text=" Languages I am knowledgeable in includes HTML, CSS, JavaScript, and Java. I also have some experience with React, jQuery, Python, PHP, and SQL. Other skills include responsive design, Git, teamwork, and time management."/>
				</div>
				<div className="about-row">
				<AboutSection 
					image="images/Plant.png"
					alt="Hobbies"
					text="I try to spread out my free time to my different hobbies. I'll create graphics with Photoshop and Illustrator, go hiking, watch the latest movie, or maybe play games. Doing these activities has helped me gain a strong appreciation for the arts and the process of creating large-scale projects."/>
				<AboutSection 
					image="images/Elli.png"
					alt="My Cat Ellie"
					text="This is my cat, Ellie! She's 3 years old and her interests include sunbathing, sitting in boxes, eating chicken, and chasing laser-pointers. She also enjoys the occassional catnip. &quot;Meow meow? Meow. Meow meow meow!&quot;"/>
				</div>
			</div>
		);
	}
}

// ===========================================

class WebsiteCard extends React.Component{
	render(){
		return (
			<div className="card">
				<div className="image-container">
					<img src={this.props.image} alt={this.props.alt}/>
				</div>
				<hr/>
				<div className="card-text">
					<h4>{this.props.title}</h4>
					<p>{this.props.text}</p>
					<a href={this.props.github} target="_blank" rel="noopener noreferrer">Check it out on Github</a>
				</div>
			</div>
		);
	}
}

class GraphicCard extends React.Component{
	render(){
		return (
			<div className="card">
				<div className="image-container">
					<img src={this.props.image} alt={this.props.alt}/>
				</div>
				<hr/>
				<div className="card-text">
					<h4>{this.props.title}</h4>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

function MoreToCome(){
	return(
		<div className="card more-to-come">
			<p>MORE TO COME...</p>
		</div>
	);
}

class Portfolio extends React.Component{
	render(){
		return(
			<div id="portfolio">
				<h3>- Websites -</h3>
				<div className="card-wrapper">
					<WebsiteCard 
						image="images/Tip-Calculator-sbs.png"
						alt="Tip Calculator"
						title="Tip Calculator (2019)"
						text="In an attempt to get more familiar with HTML, CSS, and forms, I developed a tip calculator. It evens includes a dark mode!"
						github="https://github.com/mlee138/Tip-Calculator"/>
					<WebsiteCard 
						image="images/matt-world-clock.png"
						alt="World Clock"
						title="Matt's World Clock (2019)"
						text="This clock allows you to check the time from multiple locations. It utilizes a weather API to allow the user to check the weather for the respective location."
						github="https://github.com/mlee138/Matts-World-Clock"/>
					<WebsiteCard 
						image="images/portfolio-website2.png"
						alt="Portfolio Website"
						title="Portfolio Website (2019)"
						text="It's this website you're looking at!"
						github="https://github.com/mlee138/Portfolio-Website2.0"/>
					<MoreToCome/>
				</div>
				<hr />

				<h3>- Photoshop/Illustrator -</h3>
				<div className="card-wrapper">
					<GraphicCard 
						image="images/Tastebuds_Spring_GIM.png"
						alt="Cooking Club graphic"
						title="Cooking Club Poster(2017)"
						text="I designed this poster to bolster advertisement for my club, &quot;Tastebuds'&quot;, general interest meeting."/>
					<GraphicCard 
						image="images/FINAL_Spring_UltimatePR_2019_V2.png"
						alt="Power Ranking graphic"
						title="Power Ranking (2018)"
						text="Every semester, players compete in tournaments to see who is the best 'Smash Bros. Ultimate' player. This graphic helps illustrate the achievements of those players."/>
					<GraphicCard 
						image="images/apparel_1.png"
						alt="Club Apparel Design"
						title="Club Apparel Design (2018)"
						text="To help advertise our club, 'Video Game Association,' I made the design for a custom hoodie."/>
					<GraphicCard 
						image="images/gill-fighting.png"
						alt="Anti-fish-fighting"
						title="Anti-fish-fighting (2019)"
						text="As a parody of 'Finding Nemo' this graphic depicts the fish character 'Gill' with a different and potentially darker backstory and a campaign to stop &quot;fish fighting.&quot;"/>
					<MoreToCome/>
				</div>
			</div>
		);
	}
}

// ===========================================

class Resume extends React.Component{
	render(){
		return(
			<div id="resume">
		    	<a href="images/Matthew_Lee_Resume_Fall_2019.pdf" rel="noopener noreferrer" download>- Click here to download -</a>
		    	<br/>
		    	<embed src="images/Matthew_Lee_Resume_Fall_2019.pdf"/>
			</div>
		);
	}
}

// ===========================================

class ContactMethod extends React.Component {
	render() {
		return(
			<section>
				<a href={this.props.link} target="_blank" rel="noopener noreferrer"><img src={this.props.image} alt={this.props.alt}/></a>
				<p>{this.props.text}</p>
			</section>
		);
	}
}

class Contact extends React.Component{
	render(){
		return(
			<div id="contact">
				<ContactMethod 
					link="tel:+1-646-226-5381"
					image="images/phone.png"
					alt="phone number"
					text="(646)226-5381"/>
				<ContactMethod 
					link="mailto:mlee2197@gmail.com"
					image="images/email.png"
					alt="email image"
					text="mlee2197@gmail.com"/>
				<ContactMethod 
					link="https://www.linkedin.com/in/matthewlee1297/"
					image="images/Linkedin_Logo.png"
					alt="Linkedin Logo"
					text="Matthew Lee"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));