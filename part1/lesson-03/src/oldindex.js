import ReactDOM from 'react-dom';
import {useState} from "react";

const rootElement = document.getElementById('root')

const Counter = ({number}) => <h1>{number}</h1>;

const App = (props) => {
    const [counterValue, setCounter] = useState(0);
    
    const handleClick = (counterIncrement) => counterIncrement ? setCounter( prevCounter => prevCounter + 1) : setCounter( prevCounter => prevCounter - 1);
    
    const handleClickReset = () => {
        setCounter(0);
    }
    
    const isEven = counterValue % 2 === 0
    const evenMessage = isEven ? "The number is even" : "The number is odd"
    
    const upNumber = ()=>handleClick(true);
    const lowNumber = ()=>handleClick(false);
    
    return (
        <div>
            <p>El valor del contador es:</p>
            
            <Counter number={counterValue}/>
            
            <p>{evenMessage}</p>
            
            <button onClick={upNumber}>
                Increase
            </button>
            
            <button onClick={lowNumber}>
                Decrease
            </button>
            
            <button onClick={handleClickReset}>
                Reset
            </button>
        </div>
    )
};

ReactDOM.render(<App/>, rootElement);


