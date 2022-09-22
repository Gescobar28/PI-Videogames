import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage(){
	return(
		<div>
			<h1 className='tittle'>Henry <br/>Videogames</h1> <br/><br/><br/><br/>
			<Link to='/videogames'>
				<button className="start">GO!</button>
			</Link>
		</div>
	)
}