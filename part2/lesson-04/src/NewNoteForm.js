export const NewNoteForm = ({submit, targetValue, newContent}) =>(
	<form onSubmit={submit}>
		<input type="text" onChange={targetValue} value={newContent}/>
		<button>Crear nota</button>
	</form>
);