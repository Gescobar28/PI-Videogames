import { GET_VIDEOGAMES, GET_GENRES } from '../actions'

const intitalState = {
	videogames: [],
	allVideogames: [],
	genres: []
}


function rootReducer(state = intitalState, action){
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
		
		
	


		

		default: {
			return state
		}
	}
	
}

export default rootReducer;