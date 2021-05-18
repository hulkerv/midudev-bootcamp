import './index.css';
import {useState} from 'react'
import {Note} from './Note'
import {FilterButton} from './FilterButton'
import {NewNoteForm} from './NewNoteForm'

const App = (props) => {
//	if(typeof notes === "undefined" || notes.length === 0){
//		return "No tenemos notas que mostrar";
//	}
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState('');
	const [showAll, setShowAll] = useState(true);
	
	const handleShowAll = () => {
		setShowAll(() => !showAll)
	}
	
	const handleChange = (event) => {
		setNewNote(event.target.value);
	}
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const noteToAddToState = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random()<0.5
		}
		setNotes(notes.concat(noteToAddToState));
		setNewNote('');
	}
	const filterButtonText = showAll ? 'Show only Important' :  'Show all';
	
  	return (
		<div>	
			<h1>Notes</h1>
  			<FilterButton show={handleShowAll} showText={filterButtonText}/>
    		<ol>
				{notes.filter((note)=>{
					if(showAll === true) return true;
					return note.important === true;	
				}).map((note) => (
					<Note key={note.id} {...note}/> 
				))}	  
    		</ol>
    		<NewNoteForm submit={handleSubmit} targetValue={handleChange} newNoteContent={newNote} />
		</div>
  	);
}

export default App;
