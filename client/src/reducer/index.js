import { GET_VIDEOGAMES, GET_GENRES, FILTER_BY } from '../actions'

const initialState = {
	videogames: [],
	allVideogames: [],
	genres: []
}


const rootReducer = (state = initialState, action) => {
  switch(action.type){
		case GET_VIDEOGAMES: 
			return{
				...state,
				videogames: action.payload,
				allVideogames: action.payload
			};
		case GET_GENRES:
			return{
				...state,
				genres: action.payload
			}
		case FILTER_BY:
			const allVideogames = state.allVideogames;
			if(action.payload === 'all'){
				return{
					...state,
					videogames: allVideogames
				}
			}
			if(action.payload === 'api'){
				return{
					...state,
					videogames: allVideogames.filter(el => (typeof el.id) === 'number')
				}
			}
			if(action.payload === 'created'){
				return{
					...state,
					videogames: allVideogames.filter(el => (typeof el.id) === 'string')
				}
			} else{
				const filtered = allVideogames.filter(game => game.genres.find(genre => genre.name === action.payload))

				return {
					...state,
					videogames: filtered
				}
			}
		default: {
		return state
		}
	}
	
}

export default rootReducer;