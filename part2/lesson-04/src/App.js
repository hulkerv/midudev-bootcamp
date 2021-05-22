import './index.css';
import {useEffect, useState} from 'react';
import {Note} from './Note';
import {NewNoteForm} from './NewNoteForm';
import {getAllNotes as get, createNote as create} from './services/notes/';

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
		get().then((notes) => {
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
		create(noteToAddToState).then((newNote) =>{
			setNotes((prevNotes) => prevNotes.concat(newNote));
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
		</div>
  	);
}

export default App;
