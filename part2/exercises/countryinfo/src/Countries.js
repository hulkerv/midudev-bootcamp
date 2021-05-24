export const Countries = ({countries})=>{
		if(countries.length > 10){
			
				return <h2>To many matches to filter, specify another filter.</h2>
				
			}else if(countries.length < 10 && countries.length > 1){
				
				return(
					<div>
						{countries.map((country)=>{
							return(
								<p key={country.name}>{country.name}</p>
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
						<div>
							{countries[0].languages.map((language) => {
								return <li key={language.name}>{language.name}</li>
							})}
						</div>
						<div><img src={countries[0].flag} alt={`${countries[0].name}'s flag`} with="60" height="50"/></div>
					</div>	
				)
				
			}else{
				return <div></div>
			}

		}	
		
			
		
