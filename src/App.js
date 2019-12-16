import React from 'react';
import './stylesheets/App.css'
import Navigation from './navigation';
import Startup from './pages/startup'
import About from './pages/about';
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Contact from './pages/contact'

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			currentContent: "start"
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(a) {
		var newState = {currentContent:a};
		this.setState(newState);
	}

	render(){
		return(
		<div>
			<header id="header">
				<label id="icon" htmlFor="start-btn"><img src="images/face-icon.png" alt="Matt Lee Face Icon" /></label>
				<div id="contact-info">
					<a id="phone" href="tel:+1-646-226-5381" rel="noopener noreferrer"><span>646 226 5381</span></a>
					<a id="email" href="mailto:mlee2197@gmail.com" rel="noopener noreferrer"><span>mlee2197@gmail.com</span></a>
				</div>
			</header>
			<main>
				<Navigation Id="navigation" handleClick={this.handleClick}/>
				<ChooseContent content={this.state.currentContent}/>
			</main>
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