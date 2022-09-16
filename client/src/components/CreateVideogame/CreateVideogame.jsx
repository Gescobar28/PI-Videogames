import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getGenres, getVideogames, postVideogame } from "../../actions";

export default function CreateVideogame(){
  const dispatch = useDispatch();
	const videogames = useSelector((state) => state.videogames);
	const genres = useSelector((state) => state.genres)
	const history = useHistory()
	const platformsVideogames = []
	const allPlatforms = videogames.map(el => el.platforms.map(el => platformsVideogames.push(el)))
	const platformsList = [...new Set(platformsVideogames)]
	
	const [input, setInput] = useState({
		name: '',
		description: '',
		released: '',
		rating: '',
		genres:[],
		platforms: [],
	})

	useEffect(() => {
		dispatch(getVideogames())
	},[dispatch])

	useEffect(() => {
		dispatch(getGenres())
	},[dispatch])

	function handleChange(e){
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	function handleCheck(e){
		if(e.target.checked){
			setInput({
				...input,
				platforms: [...input.platforms, e.target.value]
			})
		}
	}

	function handleSelect(e){
		setInput({
			...input,
			genres: [...input.genres, e.target.value]
		})
	}

	function handleSubmit(e){
		e.preventDefault();
		dispatch(postVideogame(input));
		alert(`Game ${input.name} added successfully`)
		setInput({
			name: '',
			description: '',
			released: '',
			rating: '',
			genres:[],
			platforms: [],
		});
		history.push('/videogames')
		console.log(input)
	}

	return(
		<div>
			<Link to='/videogames'>Go Back</Link>
			<h1>Add Videogame</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div>
					<div>
						<label>Name</label>
						<input type='text' value={input.name} name='name' onChange={(e) => handleChange(e)}></input>
					</div>
					<div>
						<label>Description</label>
						<input type='' value={input.description} name='description' onChange={(e) => handleChange(e)}></input>
					</div>
					<div>
						<label>Released</label>
						<input type='date' name='released' onChange={(e) => handleChange(e)}></input>
					</div>
					<div>
						<label>Rating</label>
						<input type='number' min='1' max='5' name='rating' onChange={(e) => handleChange(e)}></input>
					</div>
					<div>					
						<label>Platforms:</label>
						<br/>
						{platformsList.map(el =>
							<label><input type='checkbox' value={el} name={el} key={el} onChange={(e) => handleCheck(e)}></input>{el}</label>
						)}							
					</div>
					<div>
						<label>Genres:</label>
						<select onChange={(e) => handleSelect(e)}>
							{genres.map(el => 
								<option key={el.name} value={el.name}>{el.name}</option>
							)}
						</select>
						{input.genres?.map(el => 
							<ul type='none'>
								<li>{el}</li>
							</ul>	
						)}
					</div>
					<div>
						<button type='submit'>Add</button>
					</div>
				</div>
			</form>
		</div>
	)

}