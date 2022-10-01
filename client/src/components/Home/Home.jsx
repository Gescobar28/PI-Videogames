import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, filterBy, OrderByName, OrderByRating, filterByRating } from "../../actions";
import { Link } from 'react-router-dom';
import Paged from '../Paged/Paged';
import Videogame from '../Videogame/Videogame'
import SearchBar from "../SearchBar/SearchBar";
import './Home.css'


export default function Home(){
	const dispatch = useDispatch();
	const allVideogames = useSelector((state) => state.videogames);
	const videogames = useSelector((state) => state.allVideogames)
	const [orderPage, setOrderPage] = useState()
	const genres = useSelector((state) => state.genres);
	const [currentPage, setCurrentPage] = useState(1);
	const [videogamesPerPage, setVideogamesPerPage] = useState(12);
	const numLastVideogame = videogamesPerPage*currentPage;
	const numFirstVideogame = numLastVideogame - videogamesPerPage;
	const currentVideogames = allVideogames.slice(numFirstVideogame, numLastVideogame);
	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	}

	console.log(currentVideogames)
	console.log(videogames)
	console.log(allVideogames)

	useEffect(() => {
		dispatch(getVideogames())
	},[dispatch])

	useEffect(() => {
		dispatch(getGenres())
	},[dispatch])


	function handleClick(e){
		e.preventDefault();
		dispatch(getVideogames())
	}

	function handleFilterGenre(e){
		dispatch(filterBy(e.target.value))
		setCurrentPage(1)
	}

	function handleFilterRating(){
		dispatch(filterByRating())
		setCurrentPage(1)
	}

	function handleOrderName(e){
		e.preventDefault();
		dispatch(OrderByName(e.target.value));
		setCurrentPage(1);
		setOrderPage(`Ordenado ${e.target.value}`)
		
	}

	function handleOrderRating(e){
		e.preventDefault();
		dispatch(OrderByRating(e.target.value));
		setCurrentPage(1);
		setOrderPage(`Ordenado ${e.target.value}`)
	}


	return(
		<div className="divHome">
			
			{/* Esto se muestra en la parte superior */}

			<header className="header" id="header">
			<div className="divHeader">
				
				<div className="divTittle">
				<h1 onClick={(e) => handleClick(e)}>VIDEOGAMES</h1>
				</div>
				<div className="divAdd">
				<Link  className='link' to='/create'>
					<button className="divAddButton">Add Videogame</button>
				</Link>
				</div>
				<div>
				<Link to='/'>
				<button className="divRefresh">Home</button>
				</Link>
				</div>
			</div>
			</header>

			{/* Este div contiene el resto, dentro van dos div uno que muestra los juegos y otro que muestra la barra, filtros y ordenamiento */}
			<SearchBar/>
			<div>
			<Paged
			videogamesPerPage = {videogamesPerPage}
			allVideogames = {allVideogames.length}
			paginado = {paginado}
			/>

			</div>

			<div>
				
				{/* Esto se muestra del lado izquierdo */}

				<div className="divOption">
					<h3 className="h3Select">Sort by:</h3>
					<h5 className="h5Option">Alphabet:</h5>
					<select className="selects" onChange={e => handleOrderName(e)}>
						<option className="optionAll">-</option>
						<option className="optionAll" value='az'>A-Z</option>
						<option className="optionAll" value='za'>Z-A</option>
					</select>
					<br/>
					<br/>
					<h5 className="h5Option">Rating:</h5>
					<select className="selects" onChange={e => handleOrderRating(e)}>
						<option className="optionAll">-</option>
						<option className="optionAll" value='desc'>Low to High</option>
						<option className="optionAll" value='asc'>High to Low</option>
					</select>
					<h3 className="h3Select">Filter by:</h3>
					<h5 className="h5Option">Genres</h5>
					<select className="selects" onChange={e => handleFilterGenre(e)}>
						<option className="optionAll" value='all'>All</option>
						{genres?.map((el) =>(
							<option className="optionAll" key={el.id} value={el.name}>{el.name}</option>
						))}
					</select>
					<br/><br/>
					<h5 className="h5Option">Storage:</h5>
					<select className="selects" onChange={e => handleFilterGenre(e)}>
						<option className="optionAll" value='all'>All</option>
						<option className="optionAll" value='created'>Created</option>
						<option className="optionAll"value='api'>Loaded from API</option>
					</select>	
					{/* <button onClick={() => handleFilterRating()} className="h5Option">Filter Rating</button> */}
				</div>

				{/* Esto se muestra del lado derecho */}

				<div className="divVideogame">
				{allVideogames.length === 0 && videogames.length === 0 ? <p className="loadingHome">Loading...</p>
					: currentVideogames.map(el => 
						<Videogame img={el.img} id={el.id} name={el.name} genres={el.genres} key={el.id} rating={el.rating}/>
					)
				}
				{currentVideogames.length === 0 && videogames.length !== 0 ? <p className="loadingHome">No results found</p> : ''}
				</div>
				<Paged
			videogamesPerPage = {videogamesPerPage}
			allVideogames = {allVideogames.length}
			paginado = {paginado}
			/>
			</div>

		</div>
	)
}