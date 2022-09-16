import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, filterBy, OrderByName, OrderByRating } from "../../actions";
import { Link } from 'react-router-dom';
import Paged from '../Paged/Paged';
import Videogame from '../Videogame/Videogame'
import SearchBar from "../SearchBar/SearchBar";

export default function Home(){
	const dispatch = useDispatch();
	const allVideogames = useSelector((state) => state.videogames);
	const [orderPage, setOrderPage] = useState()
	const genres = useSelector((state) => state.genres);
	const [currentPage, setCurrentPage] = useState(1);
	const [videogamesPerPage, setVideogamesPerPage] = useState(15);
	const numLastVideogame = videogamesPerPage*currentPage;
	const numFirstVideogame = numLastVideogame - videogamesPerPage;
	const currentVideogames = allVideogames.slice(numFirstVideogame, numLastVideogame);
	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	}

	useEffect(() => {
		dispatch(getVideogames())
	},[dispatch])

	useEffect(() => {
		dispatch(getGenres())
	},[dispatch])

	function handleFilterGenre(e){
		dispatch(filterBy(e.target.value))
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
		<div>
			
			{/* Esto se muestra en la parte superior */}

			<div>
				<h1>Henry Videogames</h1>
				<Link to='/create'>Agregar Videojuego</Link>
				<Link to='/'>Volver</Link>
				<button>Refrescar</button>
			</div>

			{/* Este div contiene el resto, dentro van dos div uno que muestra los juegos y otro que muestra la barra, filtros y ordenamiento */}
			<div>
			<Paged
			videogamesPerPage = {videogamesPerPage}
			allVideogames = {allVideogames.length}
			paginado = {paginado}
			/>

			</div>

			<div>
				
				{/* Esto se muestra del lado izquierdo */}

				<div>
					<SearchBar/>
					<select onChange={e => handleOrderName(e)}>
						<option>-</option>
						<option value='az'>A-Z</option>
						<option value='za'>Z-A</option>
					</select>
					<select onChange={e => handleOrderRating(e)}>
						<option>-</option>
						<option value='desc'>Rating Menor a Mayor</option>
						<option value='asc'>Rating Mayor a Menor</option>
					</select>
					<select onChange={e => handleFilterGenre(e)}>
						<option value='all'>Todos</option>
						{genres?.map((el) =>(
							<option key={el.id} value={el.name}>{el.name}</option>
						))}
					</select>
					<select onChange={e => handleFilterGenre(e)}>
						<option value='all'>Todos</option>
						<option value='created'>Creado</option>
						<option value='api'>Existente</option>
					</select>	
				</div>

				{/* Esto se muestra del lado derecho */}

				<div>
					{currentVideogames?.map(el => 
						<Videogame img={el.img} id={el.id} name={el.name} genres={el.genres} key={el.id}/>
					)}
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