import React from 'react';
import './stylesheets/App.css'
import About from './pages/about';
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Contact from './pages/contact'

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			currentContent: "about",
			navDisplayed: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.showNav = this.showNav.bind(this);
	}

	handleClick(a) {
		var newState = {currentContent:a};
		this.setState(newState);

		var navNumber;
		switch(a){
			case 'about':
				navNumber = 0;
				break;
			case 'portfolio':
				navNumber = 1;
				break;
			case 'resume':
				navNumber = 2;
				break;
			case 'contact':
				navNumber = 3;
				break;
			default:
				navNumber = 0;
				break;
		}
		var navButtons = document.getElementsByClassName('nav-btn');
		for(var i=0; i<navButtons.length; i++){
			(i === navNumber ? navButtons[i].style.color = "#7bceff" : navButtons[i].style.color = "white");
		}
	}

	showNav = () => {
		var x = document.getElementById("nav");
		if (x.style.display === "block") {
			x.style.display = "none";
		  } else {
			x.style.display = "block";
		}
	}

	render(){
		var year = (new Date()).getFullYear();
		return(
		<div>
			<header id="header">
				<img id="logo" src="../images/MattLee_Logo.svg" alt="Matt Lee Design"/> 
				<div id="nav">
					<a className="nav-btn" href="#about" onClick={this.handleClick.bind(this, 'about')}>About</a>
					<a className="nav-btn" href="#portfolio"  onClick={this.handleClick.bind(this, 'portfolio')}>Portfolio</a>
					<a className="nav-btn" href="#resume" onClick={this.handleClick.bind(this, 'resume')}>Resume</a>
					<a className="nav-btn" href="#contact" onClick={this.handleClick.bind(this, 'contact')}>Contact</a>
				</div>
				<img id="hamburger-icon" src="../images/hamburger_icon.svg" alt="navigation dropdown" onClick={() => this.showNav()}/>
			</header>
			<main>
				<ChooseContent content={this.state.currentContent}/>
			</main>
			<footer>
				<div id="footer-contact">
					<span>&copy; MATTHEW LEE {year}</span>
					<span className="seperator">|</span>
					<a href="tel:+1-646-226-5381" rel="noopener noreferrer">646.226.5381</a>
					<span className="seperator">|</span>
					<a href="mailto:mlee2197@gmail.com" rel="noopener noreferrer">mlee2197@gmail.com</a>
					<span className="seperator">|</span>
					<button onClick={this.handleClick.bind(this, 'contact')}>Contact</button>
				</div>
				<hr/>
				<div id="social-media">
					<a href="https://www.facebook.com/matt.lee.thats.me" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a>
					<a href="https://www.linkedin.com/in/matthewlee1297/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
					<a href="https://github.com/mlee138" className="fa fa-github" target="_blank" rel="noopener noreferrer"></a>
				</div>
			</footer>
		</div>
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
			return <About/>;
	}
}

export default App;