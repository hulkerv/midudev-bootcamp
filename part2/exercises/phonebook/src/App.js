import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]); 
  const [ newName, setNewName ] = useState('');

  	const handleChange = (e) => {
		setNewName(e.target.value)
	};
	
	const handleSubmit = (e) => {
		
		e.preventDefault()
		
		const namesArray = persons.map((person)=>(person.name));
		
		const findName = namesArray.indexOf(newName)
				
		if(namesArray[findName] === newName){
			return alert(`${newName} is already exist` )
		}
		const nameToAddToState = {
			name: newName
			};
		
			setPersons(prevSetPersons => prevSetPersons.concat(nameToAddToState));
			setNewName('');
	};
	
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" placeholder="Add Name..." value={newName}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      	{persons.map((person)=><p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )

}

export default App
