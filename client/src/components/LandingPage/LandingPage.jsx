import React from "react";
import { Link } from 'react-router-dom';

export default function LandingPage(){
	return(
		<div>
			<h1>Henry Videogames</h1>
			<Link to='/videogames'>Home</Link>
		</div>
	)
}