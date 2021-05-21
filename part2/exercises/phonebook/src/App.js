import React, { useState } from 'react';
import {Filter} from './Filter';
import {PersonForm} from './PersonForm';
import {Persons} from './Persons';

const App = () => {
	
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
	
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ findName, setFindName ] = useState('');

  	const handleChange = {
		name: (e) => {
			setNewName(e.target.value)
		},
		number: (e) => {
			setNewNumber(e.target.value)
		}
	}
	
	const handleSubmit = (e) => {
		
		e.preventDefault()
		
		const namesArray = persons.map((person)=>(person.name));
		const numbersArray = persons.map((person)=>(person.number));
		
		const findName = namesArray.indexOf(newName);
		const findNumber = numbersArray.indexOf(newNumber);
				
		if(namesArray[findName] === newName){
			return alert(`${newName} is already exist` );
		}else if(numbersArray[findNumber] === newNumber){
			return alert(`The number ${newNumber} is already exist` );
		}
		const nameToAddToState = {
			name: newName,
			number: newNumber
			};
		
			setPersons(prevSetPersons => prevSetPersons.concat(nameToAddToState));
			setNewName('');
			setNewNumber('');
	};
	const handleFilter = (e) => {
		setFindName(e.target.value);
	}
	
	const filterValue = persons.filter((person) =>{
		
		if(findName === ""){
			console.log(person);
			return person
		}else if(person.name.toLowerCase().includes(findName.toLowerCase())){
			return person
		};
		return null
	});
	
	
  return (
    <div>
      <h2>Phonebook</h2>
      	<div>
      		<Filter handleFilter={handleFilter} findName={findName}/>
      	</div>
      <h2>Add a new</h2>
      <div>
      	<PersonForm handleSubmit={handleSubmit} handleChange={handleChange} newName={newName} newNumber={newNumber}/>
      </div>
      <h2>Numbers</h2>
	  <table>
	  	<tbody>
	  		<tr>
      			<td><strong>Name</strong></td>
      			<td><strong>  Number</strong></td>
      		</tr>
      		{filterValue.map(person => <Persons key={person.number} person={person}/>)}
	  	</tbody>
	  </table>
    </div>
  )

}

export default App
