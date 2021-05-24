import axios from 'axios';

export const getAll = () => {
	return(
		axios
			.get('http://localhost:3001/persons')
			.then(response =>{
				const {data} = response;
				return data;
		})
	)
}

export const create = ({name, number, id}) => {
	return(
		axios
			.post('http://localhost:3001/persons', {name, number, id})
			.then(response => {
				const {data} = response;
				return data;
			})
	)
}