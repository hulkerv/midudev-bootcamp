import './index.css';
import {useEffect, useState} from 'react';
import {Note} from './Note';
import {NewNoteForm} from './NewNoteForm';
import {getAllNotes as getAll, createNote as create} from './services/notes/';

const App = () => {
//	if(typeof notes === "undefined" || notes.length === 0){
//		return "No tenemos notas que mostrar";
//	}
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	
	useEffect(()=>{
		console.log('useEffect');
		setLoading(true);
		getAll().then((notes) => {
			setNotes(notes);
			setLoading(false);
		});
	}, [])
	
	const handleChange = (event) => {
		setNewNote(event.target.value);
	}
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const noteToAddToState = {
			title: newNote,
			body: newNote,
			userId: 1
		};
		setError('');
		
		create(noteToAddToState)
			.then((newNote) =>{
			setNotes((prevNotes) => prevNotes.concat(newNote));
		})
		.catch((error) => {
			console.error(error);
			setError('La API se desmadro');
		})
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
			{error ? <span style={{color: 'red'}}>{error}</span> : ""}
		</div>
  	);
}

export default App;
