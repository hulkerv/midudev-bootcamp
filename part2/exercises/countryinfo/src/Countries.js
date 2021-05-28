export const Countries = ({countries, click, weather})=>{
		if(countries.length > 10){
			
				return <h2>To many matches to filter, specify another filter.</h2>
				
			}else if(countries.length < 10 && countries.length > 1){
				
				return(
					<div>
						{countries.map((country)=>{
							return(
								<div key={country.name}>
									<br/><span>{country.name} </span><button value={country.name} onClick={click}>Show</button><br/>
								</div>
								
							)
						})}
					</div>
				)
				
			}else if(countries.length === 1){
				
				return(
					<div>
						<h1>{countries[0].name}</h1>
						<p><strong>Capital:</strong> {countries[0].capital}</p>
						<p><strong>Population: </strong> {countries[0].population}</p>
						<h2>Languages</h2>
						<ul>
							{countries[0].languages.map((language) => {
								return <li key={language.name}>{language.name}</li>
							})}
						</ul>
						<img src={countries[0].flag} alt={`${countries[0].name}'s flag`} with="60" height="50"/>
						
					</div>	
				)
				
			}else{
				return <div></div>
			}

		}	
		
			
//<h2>Weather in {weather.location.name}</h2>
//						<p><strong>Temperature: </strong>{weather.current.temperature}°C</p>
//						<img src={weather.current.weather_icons} alt={weather.current.weather_descriptions[0]}/>
//						<p><strong>Wind: </strong>{weather.current.wind_speed} direction {weather.current.wind_dir}</p>	
