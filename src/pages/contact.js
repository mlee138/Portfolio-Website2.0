import React from 'react';
import './stylesheets/contact.css';
import Form from './form';

class Contact extends React.Component{

	

	render(){
		return(
			<div id="contact">
				<h2 className="banner">Contact</h2>
				<Form></Form>
				<div id="contact-container">
					<a className="green" href="tel:+1-646-226-5381" rel="noopener noreferrer">
						<svg width="150" height="150">
							<image id="phone" 
								href="images/phone.svg" 
								height="100" width="100" 
								x="45" y="30"/>
						</svg>
						<p>(646)226-5381</p></a>
					<a className="red" href="mailto:mlee2197@gmail.com" rel="noopener noreferrer">
						<svg width="150" height="150">
							<image id="email-top" 
								href="images/email-top.svg" 
								height="150" width="150" 
								x="8" y="-35"/>
							<image id="email-bottom" 
								href="images/email-bottom.svg" 
								height="150" width="150" 
								x="12" y="-10"/>
						</svg>
						<p>mlee2197@gmail</p></a>
					<a className="blue" href="https://www.linkedin.com/in/matthewlee1297/" target="_blank" rel="noopener noreferrer">
						<svg width="150" height="150">
							<image id="linkedin"
								href="images/linkedin.svg" 
								height="100" width="100" 
								x="26" y="30"/>
						</svg>
						<p>View profile</p></a>
				</div>
			</div>
		);
	}
}

export default Contact;