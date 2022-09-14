import React from "react";

export default function Videogame({img, name, genres}){
	return(
		<div>
			<img src={img} alt='videogame' width='150px' height='150px'/>
			<h3>{name}</h3>
			<h5>Genres</h5>
			{genres.map(el => 
				<ul type="none">
					<li>{el.name}</li>
				</ul>
			)}
		</div>
	)
}