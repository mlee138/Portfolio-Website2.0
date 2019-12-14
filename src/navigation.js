import React from 'react';
import './stylesheets/navigation.css';

class Navigation extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			about: "",
			portfolio: "",
			resume: "",
			contact: "",
			selected: ""
		};

		this.handleClickData = this.handleClickData.bind(this);
	}

	handleClickData(data){
		var updateState = {[data]:"color"};
		this.setState(updateState);

		updateState["selected"] = data;
		this.setState(updateState);

		this.props.handleClick(data);
	}

	render(){		
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
				<button 
					id="start-btn"
					onClick={this.handleClickData.bind(this, "start")}>
				</button>
				<button id="dropdown-btn">=</button>					
				<ul id={this.props.Id}>
					<li id={selected["about"]}>
						<button	
							id="about-btn"
							onClick={this.handleClickData.bind(this, "about")}>
							<img className={this.state.about}  src="images/Banner-1.jpg" alt="About me" />
						</button></li>
					<li id={selected["portfolio"]}>
						<button
							onClick={this.handleClickData.bind(this, "portfolio")}>
							<img className={this.state.portfolio} src="images/Banner-2.jpg" alt="Portfolio" />
						</button></li>
					<li id={selected["resume"]}>
						<button
							onClick={this.handleClickData.bind(this, "resume")}>
							<img className={this.state.resume} src="images/Banner-3.jpg" alt="Resume" />
						</button></li>
					<li id={selected["contact"]}>
						<button
							onClick={this.handleClickData.bind(this, "contact")}>
							<img className={this.state.contact} src="images/Banner-4.jpg" alt="Contact" />
						</button></li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;