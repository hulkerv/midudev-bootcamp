import axios from 'axios';

export const search = (country) => {
	return(
		axios
			.get(`https://restcountries.eu/rest/v2/name/${country}`)
			.then(response => {
				const data = response.data;
				return data
			})
	)
}