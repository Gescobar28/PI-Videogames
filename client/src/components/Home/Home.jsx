import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres } from "../../actions";
import { Link } from 'react-router-dom';
import Paged from '../Paged/Paged';
import Videogame from '../Videogame/Videogame'

export default function Home(){
  const dispatch = useDispatch();
	const allVideogames = useSelector((state) => state.allVideogames);
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
	},[])

	useEffect(() => {
		dispatch(getGenres())
	},[])

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
					<select>
						<option value='all'>Todos</option>
						<option value='az'>A-Z</option>
						<option value='za'>Z-A</option>
					</select>
					<select>
						<option value='all'>Todos</option>
						<option value='desc'>Rating Mayor a Menor</option>
						<option value='asc'>Rating Menor a Mayor</option>
					</select>
					<select>
						<option value='all'>Todos</option>
						{genres.map(el => 
							<option value={el.name}>{el.name}</option>
						)}
					</select>
					<select>
						<option value='all'>Todos</option>
						<option value='creado'>Creado</option>
						<option value='api'>Existente</option>
					</select>	
				</div>

				{/* Esto se muestra del lado derecho */}

				<div>
					{currentVideogames?.map(el => 
						<Videogame img={el.img} name={el.name} genres={el.genres}/>
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