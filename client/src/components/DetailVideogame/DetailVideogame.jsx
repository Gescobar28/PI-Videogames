import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { Link } from "react-router-dom";


export default function DetailVideogame(props){
	const dispatch = useDispatch();
	const videogame = useSelector((state) => state.detail)

	useEffect(()=> {
		dispatch(getDetail(props.match.params.id))
	},[dispatch]);

	return(
		<div>
			<img src={videogame.img} alt='image not found' width='200px' height='200px'/>
			<h1>{videogame.name}</h1>
			<h5>Genres</h5>
				{videogame.genres?.map(el => 
					<ul key={el.id} type="none">
						<li key={el.id}>{el.name}</li>
					</ul>
				)}			
			<h5>Released</h5>
			<p>{videogame.released}</p>
			<h5>Rating</h5>
			<p>{videogame.rating}</p>
			<h5>Platforms</h5>
			{videogame.platforms?.map(el => 
				<ul type='none'>
					<li key={el}>{el}</li>
				</ul>)}
			<h5>Description</h5>
			<p>{videogame.description}</p>
			<Link to='/videogames'>Back</Link>
		</div>
	)
}