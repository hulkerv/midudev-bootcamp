export const Courses = ({courses, total1, total2}) => (
	<div>
		<div key={courses[0].id}>
			<h1>{courses[0].name}</h1>
			{courses[0].parts.map((part) => (
				<p key={part.id}>{part.name} {part.exercises}</p>		
			))}
			<p><strong>Total of {total1} exercises</strong></p>	
		</div>
		<div key={courses[1].id}>
			<h1>{courses[1].name}</h1>
			{courses[1].parts.map((part) => (
				<p key={part.id}>{part.name} {part.exercises}</p>		
			))}
			<p><strong>Total of {total2} exercises</strong></p>	
		</div>
	</div>
)



 