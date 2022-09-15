import axios from 'axios'
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_BY = 'FILTER_BY';


export function getVideogames(){
  return async function(dispatch){
    const json = await axios.get(`http://localhost:3001/videogames`)
    return dispatch({
        type: GET_VIDEOGAMES,
        payload: json.data
    })
  }
};

export function getGenres(){
  return async function(dispatch){
    const json = await axios.get(`http://localhost:3001/genres`)

    return dispatch({
      type: GET_GENRES,
      payload: json.data
    })
  }
}

export function filterByGenre(payload){
  return{   
    type: FILTER_BY,
    payload
  }
}