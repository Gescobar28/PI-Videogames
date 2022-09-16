import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {searchByName} from '../../actions';


export default function SearchBar(){
	const dispatch = useDispatch()
	const [name, setName] = useState('');

	function handleInput(e){
		e.preventDefault();
		setName(e.target.value);
	}

	function handleSubmit(e){
		e.preventDefault()
		dispatch(searchByName(name));
		setName('');
	}

	return(
		<div>
			<input type='text' placeholder='Enter name' onChange={(e) => handleInput(e)}/>
			<button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
		</div>
	)
}