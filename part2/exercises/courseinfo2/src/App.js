import {Courses} from './Courses'


const App = ({courses}) => {
	
	const exercisesArray1 = courses[0].parts.map((part) => (part.exercises))
	const exercisesArray2 = courses[1].parts.map((part) => (part.exercises))
	const total1 = exercisesArray1.reduce((aV, nV) =>(aV + nV));
	const total2 = exercisesArray2.reduce((aV, nV) =>(aV + nV));
	
	return <Courses courses={courses} total1={total1} total2={total2}/>
	  	
}
export default App
