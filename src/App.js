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
			currentContent: "about"
		};
		this.handleClick = this.handleClick.bind(this);
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
			(i === navNumber ? navButtons[i].style.color = "#df0744" : navButtons[i].style.color = "black");
		}
	}

	render(){
		var year = (new Date()).getFullYear();
		return(
		<div>
			<header id="header">
				<div id="title">
					<h3>Matt Lee</h3>
					<h4>Jr. Web Developer</h4>
					</div>
				<ul id="nav">
					<li onClick={this.handleClick.bind(this, 'about')}><a className="nav-btn" href="#about">About</a></li>
					<li onClick={this.handleClick.bind(this, 'portfolio')}><a className="nav-btn" href="#portfolio">Portfolio</a></li>
					<li onClick={this.handleClick.bind(this, 'resume')}><a className="nav-btn" href="#resume">Resume</a></li>
					<li onClick={this.handleClick.bind(this, 'contact')}><a className="nav-btn" href="#contact">Contact</a></li>
				</ul>
			</header>
			<main>
				<ChooseContent content={this.state.currentContent}/>
			</main>
			<footer>
				<p>&copy; MATTHEW LEE {year}</p>
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
			return <Startup/>;
	}
}

export default App;