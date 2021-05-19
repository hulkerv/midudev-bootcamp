import './index.css';
import {useEffect, useState} from 'react'
import {Note} from './Note'
import {FilterButton} from './FilterButton'
import {NewNoteForm} from './NewNoteForm'

const App = () => {
//	if(typeof notes === "undefined" || notes.length === 0){
//		return "No tenemos notas que mostrar";
//	}
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');
	const [loading, setLoading] = useState(false);
	
	useEffect(()=>{
		console.log('useEffect');
		setLoading(true);
		setTimeout(()=>{
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(response => response.json())
				.then(json => {
					console.log('seteando las notas de la API');
					setNotes(json);
					setLoading(false);
			})
		},2000)
	}, [])
	
	const handleChange = (event) => {
		setNewNote(event.target.value);
	}
	
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const noteToAddToState = {
			id: notes.length + 1,
			title: newNote,
			body: newNote,
		}
		setNotes(notes.concat(noteToAddToState));
		setNewNote('');
	}
	
  	return (
		<div>	
			<h1>Notes</h1>
   			{loading ? 'Cargando...' : ""}
    		<ol>
				{notes.map((note) => (
					<Note key={note.id} {...note}/> 
				))}	  
    		</ol>
    		<NewNoteForm submit={handleSubmit} targetValue={handleChange} newNoteContent={newNote} />
		</div>
  	);
}

export default App;
