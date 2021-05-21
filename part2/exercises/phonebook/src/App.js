import React, { useState } from 'react';

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
	
	const filterValue = persons.filter((val) =>{
		if(findName === ""){
			return val
		}else if(val.name.toLowerCase().includes(findName.toLowerCase())){
			return val
		};
	});
	console.log(filterValue);
	
  return (
    <div>
      <h2>Phonebook</h2>
      <p><label htmlFor="filter">filter shown with</label><input onChange={handleFilter} id="filter" type="text" placeholder="Search..." value={findName}/></p>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input id="name" onChange={handleChange.name} type="text" placeholder="Add Name..." value={newName}/>
          <input id="number" onChange={handleChange.number} type="number" placeholder="Add Number..." value={newNumber}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      	{filterValue.map((person)=><p key={person.number}>{person.name} - {person.number}</p>)}
      </div>
    </div>
  )

}

export default App
