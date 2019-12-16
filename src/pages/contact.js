import React from 'react';
import './stylesheets/contact.css';

class Contact extends React.Component{
	render(){
		return(
			<div id="contact">
				<h2 className="banner">Contact</h2>
				<div id="contact-container">
					<a className="green" href="tel:+1-646-226-5381" rel="noopener noreferrer">
						<svg width="200" height="200">
							<image id="phone" 
								href="images/phone.svg" 
								height="175" width="175" 
								x="50" y="30"/>
						</svg>
						<p>(646)226-5381</p></a>
					<a className="red" href="mailto:mlee2197@gmail.com" rel="noopener noreferrer">
						<svg width="200" height="200">
							<image id="email-top" 
								href="images/email-top.svg" 
								height="225" width="225" 
								x="-6" y="-43"/>
							<image id="email-bottom" 
								href="images/email-bottom.svg" 
								height="225" width="225" 
								x="0" y="-10"/>
						</svg>
						<p>mlee2197@gmail.com</p></a>
					<a className="blue" href="https://www.linkedin.com/in/matthewlee1297/" target="_blank" rel="noopener noreferrer">
						<svg width="200" height="200">
							<image id="linkedin"
								href="images/linkedin.svg" 
								height="175" width="175" 
								x="13" y="30"/>
						</svg>
						<p>View profile</p></a>
				</div>
			</div>
		);
	}
}

export default Contact;