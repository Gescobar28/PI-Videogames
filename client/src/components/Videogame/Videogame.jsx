import React from "react";
import {Link} from 'react-router-dom'
import './Videogame.css'

export default function Videogame({img, name, genres, id, rating}){
	return(
		<div className="divGame">
			<div>
				<Link className="link" to={`videogames/${id}`}>
				<h3 className="h3">{name}</h3>
				<img className="img" src={img} alt='videogame'/>
				</Link>
			<div className="divGenres">
				<h5 className="h5Game">Genres</h5>
				{genres.map(el => 
					
					<p className='genres' key={el.id}>{el.name}</p>
					
				)}
			</div>
			<div className="divRating">
				{/* <img className='star'src='./estrella.png' alt='star'/> */}
				<h5 className="h5Game">Rating</h5>
				<p className="numRating">{rating}</p>
			</div>
			</div>
		</div>
	)
}