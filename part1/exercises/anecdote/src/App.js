import React, {useState} from 'react';

const Title = ({text})=> <h1>{text}</h1>;

const Anecdote = ({anecdote}) => <p>{anecdote}</p>;

const AnecdoteVotes = ({anecdoteVotes}) => <p>Has {anecdoteVotes} votes</p> 

const ButtonNumber = ({clickButton, text}) => <button onClick={clickButton}>{text}</button>;

const App = () => {
	
	const anecdotes = [
		'If it hurts, do it more often',
    	'Adding manpower to a late software project makes it later!',
    	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    	'Premature optimization is the root of all evil.',
    	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  	]
	const randomNumber = Math.floor(Math.random() * ((anecdotes.length) - 0)) + 0;	
	const randomNumber2 = Math.floor(Math.random() * ((anecdotes.length) - 0)) + 0;	
	
	
	// States
	const [selected, setSelected] = useState(randomNumber)
	const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
	
	// Functions
	const anecdoteNumber = ()=>{ 
		if(randomNumber === selected && selected < 5){
			setSelected(randomNumber + 1);
		}else if(randomNumber === selected && selected === 5){
			setSelected(randomNumber - randomNumber2)
		}else{
			setSelected(randomNumber)
		}
	};
	
	const votesNumber = () => {
		const votesCopy = [...votes];
		votesCopy[selected] += 1;
		setVotes(votesCopy);
	}
	
	const mostVotePosition = votes.indexOf(Math.max(...votes));
	return ( 
		<div> 
			<Title text='Anecdote of the day'/>
			<Anecdote anecdote={anecdotes[selected]}/> 
			<AnecdoteVotes anecdoteVotes={votes[selected]}/> 
			<ButtonNumber clickButton={votesNumber} text='Vote'/>
			<ButtonNumber clickButton={anecdoteNumber} text='Next Anecdote'/>
			<Title text='Anecdote with most votes'/>
			<Anecdote anecdote={anecdotes[mostVotePosition]}/> 
			<AnecdoteVotes anecdoteVotes={Math.max(...votes)}/> 
		</div>
	)
}

export default App
