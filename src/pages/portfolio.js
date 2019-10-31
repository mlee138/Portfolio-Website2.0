import React from 'react';
import './portfolio.css'
import './banner.css';

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
				<h2 className="banner">Portfolio</h2>
				<h2>- Websites -</h2>
				<div className="card-wrapper">
					<WebsiteCard 
						image="images/Tip-Calculator-sbs.jpg"
						alt="Tip Calculator"
						title="Tip Calculator (2019)"
						text="In an attempt to get more familiar with HTML, CSS, and forms, I developed a tip calculator. It evens includes a dark mode!"
						github="https://github.com/mlee138/Tip-Calculator"/>
					<WebsiteCard 
						image="images/matt-world-clock.jpg"
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
						image="images/Tastebuds_Spring_GIM.jpg"
						alt="Cooking Club graphic"
						title="Cooking Club Poster(2017)"
						text="I designed this poster to bolster advertisement for my club, &quot;Tastebuds'&quot;, general interest meeting."/>
					<GraphicCard 
						image="images/FINAL_Spring_UltimatePR_2019_V2.jpg"
						alt="Power Ranking graphic"
						title="Power Ranking (2018)"
						text="Every semester, players compete in tournaments to see who is the best 'Smash Bros. Ultimate' player. This graphic helps illustrate the achievements of those players."/>
					<GraphicCard 
						image="images/apparel_1.jpg"
						alt="Club Apparel Design"
						title="Club Apparel Design (2018)"
						text="To help advertise our club, 'Video Game Association,' I made the design for a custom hoodie."/>
					<GraphicCard 
						image="images/gill-fighting.jpg"
						alt="Anti-fish-fighting"
						title="Anti-fish-fighting (2019)"
						text="As a parody of 'Finding Nemo' this graphic depicts the fish character 'Gill' with a different and potentially darker backstory and a campaign to stop &quot;fish fighting.&quot;"/>
					<MoreToCome/>
				</div>
			</div>
		);
	}
}

export default Portfolio;