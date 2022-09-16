import React from "react";
import {Link} from 'react-router-dom'

export default function Videogame({img, name, genres, id}){
	return(
		<div>
			<Link to={`videogames/${id}`}>
			<img src={img} alt='videogame' width='200px' height='200px'/>
			<h3>{name}</h3>
			</Link>
			<h5>Genres</h5>
			{genres.map(el => 
				<ul key={el.id} type="none">
					<li key={el.id}>{el.name}</li>
				</ul>
			)}
		</div>
	)
}