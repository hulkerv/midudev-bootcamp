import './App.css';
import Message from './Message';
import Description from './Description';

const App = () => {
    return (
        <div className="App">
            <Message 
                color='red' 
                message='Estamos trabajando'/>
            <Message 
                color='green' 
                message='en un curso'/>        
            <Message 
                color='yellow' 
                message='de react'/>        
            <Description/>        
        </div>
    )
}

export default App;
