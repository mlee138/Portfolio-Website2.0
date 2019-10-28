import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './navigation.css'
import './startup.css'
import './about.css'
import './portfolio.css'
import './resume.css'
import './contact.css'
import './banner.css'

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
			<header id="header">
				<a id="icon" href="https://www.linkedin.com/in/matthewlee1297/" target="_blank" rel="noopener noreferrer"><img src="face-icon.png" alt="Matt Lee Face Icon" /></a>
				<div id="contact-info">
					<a id="phone" href="tel:+1-646-226-5381" rel="noopener noreferrer">646 226 5381</a>
					<a id="email" href="mailto:mlee2197@gmail.com" rel="noopener noreferrer">mlee2197@gmail.com</a>
				</div>
			</header>
			<main>
				<Navigation Id="desktop-nav" handleClick={this.handleClick}/>
				<ChooseContent content={this.state.currentContent}/>
			</main>
		</div>
		);
	}
}

class Navigation extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			about: false,
			portfolio: false,
			resume: false,
			contact: false,
			selected: ""
		};

		this.handleClickData = this.handleClickData.bind(this);
	}

	handleClickData(data){
		var updateState = {};

		updateState[data] = true;
		this.setState(updateState);

		updateState["selected"] = data;
		this.setState(updateState);

		this.props.handleClick(data);
	}

	render(){
		var content = {
			colorAbout: "",
			colorPortfolio:"",
			colorResume:"",
			colorContact:""
		};
			
		(this.state.about ? content["colorAbout"]='color' : content["colorAbout"]='');
		(this.state.portfolio ? content["colorPortfolio"]='color' : content["colorPortfolio"]='');
		(this.state.resume ? content["colorResume"]='color' : content["colorResume"]='');
		(this.state.contact ? content["colorContact"]='color' : content["colorContact"]='');
		
		var selected = {
			about: '',
			portfolio:'',
			resume: '',
			contact: ''
		};

		switch(this.state.selected){
			case 'about':
				selected["about"] = 'nav-selected';
				break;
			case "portfolio":
				selected["portfolio"] = 'nav-selected';
				break;
			case "resume":
				selected["resume"] = 'nav-selected';
				break;
			case "contact":
				selected["contact"] = 'nav-selected';
				break;
			default:
				break;
		}

		return(
			<nav>
				<button id="dropdown-btn">=</button>					
				<ul id={this.props.Id}>
					<li id={selected["about"]}>
						<button	
							onClick={this.handleClickData.bind(this, "about")}>
							<img className={content["colorAbout"]}  src="images/Banner-1.jpg" alt="About me" />
						</button></li>
					<li id={selected["portfolio"]}>
						<button
							onClick={this.handleClickData.bind(this, "portfolio")}>
							<img className={content["colorPortfolio"]} src="images/Banner-2.jpg" alt="Portfolio" />
						</button></li>
					<li id={selected["resume"]}>
						<button
							onClick={this.handleClickData.bind(this, "resume")}>
							<img className={content["colorResume"]} src="images/Banner-3.jpg" alt="Resume" />
						</button></li>
					<li id={selected["contact"]}>
						<button
							onClick={this.handleClickData.bind(this, "contact")}>
							<img className={content["colorContact"]} src="images/Banner-4.jpg" alt="Contact" />
						</button></li>
				</ul>
			</nav>
		);
	}
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

function Startup(){
	return (
		<div id="startup">
			<h1>Hi there! I'm Matthew Lee.</h1>
			<img src="images/Professional_Photo_ML_Circle.png" alt="Matthew Lee"/>
			<h2>Choose a section to get started.</h2>
		</div>
	);
}

//============================================

function Banner(props){
	return(
		<div id="banner-container">
			<img src={props.banner} alt={props.alt}/>
		</div>
	);
}

// ===========================================

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

class About extends React.Component{
	render(){
		return( 
			<div id="about">
				<Banner banner="nav-1.jpg" alt="About Me"/>
				<div className="about-row">
				<AboutSection 
					image="images/Matthew_Lee.png"
					alt="Matt Lee, that's me"
					text="Hi, my name is Matthew Lee. I've recently graduated from Binghamton University and am now back in New York City. Through clear, simple designs and pixel perfect work, I want to take my web development skills to the next level." />
				<AboutSection 
					image="images/apparel_1.png"
					alt="Skills"
					text=" Languages I am knowledgeable in includes HTML, CSS, JavaScript, and Java. I also have some experience with React, jQuery, Python, PHP, and SQL. Other skills include responsive design, Git, teamwork, and time management."/>
				</div>
				<div className="about-row">
				<AboutSection 
					image="images/Plant.jpg"
					alt="Hobbies"
					text="I try to spread out my free time between hobbies. I'll create graphics, go hiking, watch the latest movie, or maybe play games. Doing these activities has helped me gain a strong appreciation for the arts and the process of creating large-scale projects."/>
				<AboutSection 
					image="images/Elli.jpg"
					alt="My Cat Ellie"
					text="This is my cat, Ellie! She's 3 years old and her interests include sunbathing, sitting in boxes, eating chicken, and chasing laser-pointers. She also enjoys the occassional catnip. &quot;Meow meow? Meow. Meow meow meow!&quot;"/>
				</div>
			</div>
		);
	}
}

// ===========================================

function WebsiteCard(props){
	return (
		<div className="card">
			<div className="image-container">
				<img src={props.image} alt={props.alt}/>
			</div>
			<div className="card-text">
				<h4>{props.title}</h4>
				<p>{props.text}</p>
				<a href={props.github} target="_blank" rel="noopener noreferrer">Check it out on Github</a>
			</div>
		</div>
	);
}

function GraphicCard(props){
	return (
		<div className="card">
			<div className="image-container">
				<img src={props.image} alt={props.alt}/>
			</div>
			<div className="card-text">
				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</div>
		</div>
	);
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
				<Banner banner="nav-2.jpg" alt="Portfolio"/>
				<h2>- Websites -</h2>
				<div className="card-wrapper">
					<WebsiteCard 
						image="images/Tip-Calculator-sbs.jpg"
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
						image="images/portfolio-website2.jpg"
						alt="Portfolio Website"
						title="Portfolio Website (2019)"
						text="It's this website you're looking at!"
						github="https://github.com/mlee138/Portfolio-Website2.0"/>
					<MoreToCome/>
				</div>
				<hr />

				<h2>- Photoshop/Illustrator -</h2>
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
				<Banner banner="nav-3.jpg" alt="Resume"/>
		    	<embed src="images/Matthew_Lee_Resume_Fall_2019.pdf"/>
			</div>
		);
	}
}

// ===========================================

class Contact extends React.Component{
	render(){
		return(
			<div id="contact">
				<Banner banner="nav-4.jpg" alt="Contact"/>
				<a className="green" href="tel:+1-646-226-5381" rel="noopener noreferrer">
					<img src="images/phone.jpg" alt="click to call"/>
					<p>Phone: <span>(646)226-5381</span></p></a>
				<a className="red" href="mailto:mlee2197@gmail.com" rel="noopener noreferrer">
					<img src="images/email.jpg" alt="send email"/>
					<p>Email: <span>mlee2197@gmail.com</span></p></a>
				<a className="blue" href="https://www.linkedin.com/in/matthewlee1297/" target="_blank" rel="noopener noreferrer">
					<img src="images/Linkedin_Logo.jpg" alt="Linkedin Profile"/>
					<p><span>View profile</span></p></a>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));