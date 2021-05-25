import React, { useState, useEffect } from 'react';
import {search} from './services/restCountries/';
import {Countries} from './Countries';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [searchCountry, setSearchCountry] = useState('');
	
	const handleChange =(e) =>{
		setSearchCountry(e.target.value)
	}
	
	useEffect(()=>{
		search(searchCountry === '' ? 'venezuela' : searchCountry)
			.then((country) => {setCountries(country)})
	}, [searchCountry]);	
	
	const handleClick = (e) =>{
		setSearchCountry(e.target.value)
	} 
		
	
  return (
    <div>
     	<div>
     		<label htmlFor="search">Find countries </label><input id="search" onChange={handleChange} type="text" value={searchCountry}/>
     	</div>
     	<Countries countries={countries} click={handleClick}/>
    </div>
  )
}

export default App
