import ReactDOM from 'react-dom';
import {useState} from "react";

const WarningNotUsed = () => <h1>Todavia no se ha usado el contador</h1>;

const ListOfClicks = ({clicks})=> {
	console.log({clicks})
	return <p>{clicks.join(", ")}</p>
}

//const INITIAL_COUNTER_STATE={
//        left: 0,
//        right: 0,
//    }

const App = () =>{
//    const [left, setLeft] = useState(0);
//    const [right, setRight] = useState(0);
//    const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)
//    const [clicks, setClicks] = useState([])
//	
//    const handleClickLeft = () =>{
//        const newCountersState = {
//            ...counters,
//            left: counters.left + 1,
//        };
//        setCounters(newCountersState)
//		setClicks(prevClicks => ([...prevClicks, "L"]))
//    }
//    
//    const handleClickRight = () =>{
//        const newCountersState = {
//            ...counters,
//            right: counters.right + 1,
//        }
//        setCounters(newCountersState)
//		setClicks(prevClicks => ([...prevClicks, "R"]))
//    }
//    
//	const handleReset = ()=>{
//		setCounters(INITIAL_COUNTER_STATE)
//		setClicks([])
//	}
//    return(
//        <div>
//            {counters.left}
//            <button onClick={handleClickLeft}>
//                left
//            </button>
//            <button onClick={handleClickRight}>
//                right
//            </button>
//            {counters.right}
//            <p>
//            	<button onClick={handleReset}>
//            		reset
//            	</button>
//            </p>
//            <p>Clicks totales: {clicks.length}</p>
//            {clicks.length === 0 ? (<WarningNotUsed/>) : (<ListOfClicks clicks ={clicks}/>)}
//            
//        </div>
//    )
	const [clicks, setClicks] = useState([]);
	
	const handleClickLeft = () => setClicks((prevClicks) => [...prevClicks, 'L']);
	const handleClickRight = () => setClicks((prevClicks) => [...prevClicks, 'R']);
	const handleReset = () => setClicks([]);
	
	const left = clicks.filter(click => click === 'L')
	const right = clicks.filter(click => click === 'R')
	
	return (
		<div>
			{left.length}
			<button onClick={handleClickLeft}>left</button>
			<button onClick={handleClickRight}>right</button>
			{right.length}
			<p>Clicks totales: {clicks.length}</p>
			<button onClick={handleReset}>reset</button>
			{clicks.length === 0 ? (<WarningNotUsed/>) : (<ListOfClicks clicks={clicks}/>)}
			
		</div>
	)
}


const rootElement = document.getElementById('root')

ReactDOM.render(<App/>, rootElement);