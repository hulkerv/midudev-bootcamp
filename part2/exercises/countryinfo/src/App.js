import React, { useState, useEffect } from 'react';
import {search, searchTime} from './services/restCountries/';
import {Countries} from './Countries';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [weather, setWeather] = useState([]);
	const [searchCountry, setSearchCountry] = useState('');
	
	const api_key = process.env.REACT_APP_WEATHER_API_KEY
	
	const handleChange =(e) =>{
		setSearchCountry(e.target.value)
	}
	
	useEffect(()=>{
		search(searchCountry === '' ? 'venezuela' : searchCountry)
			.then((country) => {setCountries(country)})
			.then(searchTime(searchCountry === '' ? 'venezuela' : searchCountry, api_key)
				.then((countryWeather) =>{setWeather(countryWeather)}))
	},[searchCountry, api_key]);	
	
	const handleClick = (e) =>{
		setSearchCountry(e.target.value)
	} 
		
  return (
    <div>
     	<div>
     		<label htmlFor="search">Find countries </label><input id="search" onChange={handleChange} type="text" value={searchCountry}/>
     	</div>
     	<Countries countries={countries} click={handleClick} weather={weather}/>
    </div>
  )
}

export default App
