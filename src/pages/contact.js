import React from 'react';
import './stylesheets/contact.css';
import './stylesheets/banner.css';

class Contact extends React.Component{
	render(){
		return(
			<div id="contact">
				<h2 className="banner">Contact</h2>
				<div id="contact-container">
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
			</div>
		);
	}
}

export default Contact;